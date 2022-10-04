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
                    @click="putEstado(tarea.estado,index)">
                        <i v-bind:class="[tarea.estado ? 'fa-solid fa-circle-check' :' far fa-circle']" ></i>
                        <!-- <i @click="[tarea.estado == true ? 'fa-solid fa-circle-check' : 'far fa-circle']"></i> -->
                    </span>                  
                    {{tarea.nombre}}
                    {{tarea.apellido}}

                    <div>
                            <span class="text-danger cursor" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin: 10px" >
                                <i class="fa-solid fa-pen"></i>
                            </span>
                        <span class="text-danger cursor" @click="deleteUsuarios(tarea.id)">
                            <i  class="fas fa-trash-alt"></i>
                        </span>
                    </div>

                    <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Editar Informacion</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <label class="form-label">Nombre</label>
                                        <input type="text" class="form-control"  v-model="updnombre"/>
                                    </div>
                                    <div class="col-sm-3">
                                        <label class="form-label">Apellido</label>
                                        <input type="text" class="form-control" v-model="updapellido" />
                                    </div>

                                    <div class="col-sm-3">
                                        <label class="form-label">Ciudad</label>
                                        <input class="form-control" v-model="updciudad" type="text"/>     
                                    </div>
                                    <br/>
                                </div>
                        </form> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="PutUsuarios(tarea.id)" class="btn btn-primary">Guardar Cambios</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>



                </li>
            </ul>
            <br>
        </div>  
    </div>  


</template>

<script>
     import axios from "axios";
    import swal from "sweetalert";
    export default{
        name: "App",
        data(){
            return {
                showModal : true,
                id: '',
                nombre: '',
                apellido: '',
                estado: '',
                ciudad: '',
                listado: [],
                loading : false,
                updnombre : '',
                updapellido : '',
                updciudad : ''
            }
        },
        methods:{
            GetUsuarios(){
                axios.get("http://localhost:33314/api/Usuarios").then(response => {
                    console.log(response);
                    this.listado = response.data;
                    console.log(this.listado);
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
                if(this.nombre == "" && this.apellido == "" && this.ciudad == "")
                {
                    alert("Ingrese los datos para poder agregar")
                }
                else{
                    axios.post("http://localhost:33314/api/Usuarios", usuario).then(response => {
                        console.log(response);
                        
                    }).catch(error => {
                        console.log(error);
                    })
                    
                    console.log(usuario);
                }
            },
            deleteUsuarios(id){
                    axios.delete("http://localhost:33314/api/Usuarios/"+id).then(response => {
                        console.log(response)
                        swal("Usuario eliminado","", "success");
                    }).catch(err => {                      
                        console.log(err);
                    });
            },
            PutUsuarios(Id){
                const updusuario = {
                        id: Id,
                        nombre: this.updnombre,
                        apellido: this.updapellido,
                        ciudad: this.updciudad,
                        estado: false,
                }
                axios.put("http://localhost:33314/api/Usuarios/"+Id, updusuario).then(response => {                   
                    console.log(response);
                    console.log(updusuario);
                }).catch(err => {
                    console.log(err);
                });               
            },
            putEstado(Id){
                const updEstado = {
                    id : Id,
                    estado : !this.estado
                }
                axios.put("http://localhost:33314/api/Usuarios/"+ Id, updEstado).then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                });
            },
             //esto es una prueba de actualizacion de github
        },   

        mounted(){
            this.GetUsuarios();
        },
    }
</script>