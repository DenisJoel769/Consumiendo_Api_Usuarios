<template>
    <div class="container">
        <div class="card" style="background: red">
            <h2>Prueba de peticiones</h2>
                <div class="text-center">
                    <div class="card">
                        <div class="container">
                            <form>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <label class="form-label">Nombre</label>
                                        <input type="text" class="form-control" v-model="nombre"/>
                                    </div>
                                    <div class="col-sm-3">
                                        <label class="form-label">Apellido</label>
                                        <input type="text" class="form-control" v-model="apellido"/>
                                    </div>

                                    <div class="col-sm-3">
                                        <label class="form-label">Ciudad</label>
                                        <input class="form-control" v-model="ciudad" type="text"/>     
                                    </div>
                                    <br/>
                                    <div style="margin-top: 5px" class="d-flex justify-content-end ">
                                            <button class="btn btn-primary" @click="PostUsuarios(usuario)">Agregar</button>                                                                     
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br/>
                    </div>
                </div>
     
            
            <ul class="list-group">
                       <div class="text-center">
                 <div v-if="loading" class="spinner-grow text-primary" role="status">
                         <span class="visually-hidden">Loading...</span>
                </div>
            </div>
                <li v-for="(tarea, index) of listado" :key="index" 
                    class="list-group-item d-flex justify-content-between">
                
                    <span class="cursor" v-bind:class="{'text-success':tarea.estado}"
                    @click="editarTarea(index,tarea)">
                        <i v-bind:class="[tarea.estado ? 'fa-solid fa-circle-check' :' far fa-circle']" ></i>
                        <!-- <i @click="[tarea.estado == true ? 'fa-solid fa-circle-check' : 'far fa-circle']"></i> -->
                    </span>                  
                    {{tarea.nombre}}

                    <div>
                        <span class="text-danger cursor" style="margin: 10px" @click="PutUsuarios(tarea.id)">
                            <i class="fa-solid fa-pen"></i>
                        </span>
                        <span class="text-danger cursor" @click="deleteUsuarios(tarea.id)">
                            <i  class="fas fa-trash-alt"></i>
                        </span>
                    </div>
                </li>
            </ul>
            <br>
        </div>
    </div>
</template>

<script>
     import axios from "axios";

    export default{
        name: "App",
        data(){
            return {
                id: '',
                nombre: '',
                apellido: '',
                estado: '',
                ciudad: '',
                listado: [],
                loading : false
            }
        },
        methods:{

            GetUsuarios(){
                axios.get("http://localhost:33314/api/Usuarios").then(response => {
                    console.log(response);
                    this.listado = response.data;
                }).catch(error => {
                    console.log(error);
                })
            },

            PostUsuarios(){
                const usuario = {
                        nombre: this.nombre,
                        apellido: this.apellido,
                        ciudad: this.ciudad,
                        estado: false,
  
                }
                axios.post("http://localhost:33314/api/Usuarios", usuario).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
                
                console.log(usuario);
            },
            deleteUsuarios(id){
                    axios.delete("http://localhost:33314/api/Usuarios/"+id).then(response => {
                        console.log(response)
                        alert("Usuario Eliminado");
                    }).catch(err => {                      
                        console.log(err);
                    });
            },
            PutUsuarios(Id){
                const updusuario = {
                        id: Id,
                        nombre: this.nombre,
                        apellido: this.apellido,
                        ciudad: this.ciudad,
                        estado: false,
  
                }

                axios.put("http://localhost:33314/api/Usuarios/"+Id, updusuario).then(response => {
                    
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                })                
            },
    
            pruebaApi()
            {
                // axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
                //     console.log('Esto es una prueb para consumir api',response);
                // })
            }

        },   
         created: function(){
               this.pruebaApi();
            },
        mounted(){
            this.GetUsuarios();
        },
    }
</script>