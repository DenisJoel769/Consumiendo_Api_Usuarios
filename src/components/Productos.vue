<template>
    <div class="container">
        <h2 class="title_Producto" >Productos a la Venta</h2>
   
               <div class="row">
                    <div class="col col-lg-4"  v-for="producto in productos" :key="producto.id">      
                                <div class="card">
                                    <img 
                                    :src="producto.main_image" 
                                    class="card-img" 
                                    alt="30px">
                                        <div class="card-body">
                                            <h5 class="card-title">{{producto.name}}</h5>
                                                <h6 class="card-precio">Gs{{(producto.price)}}</h6>
                                        
                                            <a href="#" class="btn btn-primary">Comprar</a>
                                        </div>
                                </div> 
                     </div>          
               </div> 
        </div>
</template>

<script>
import apiProductos from '@/components/api.js'
    export default {
        name: 'Productos',
        components: {
            
        },
        data(){
            return {
                productos: []
            }
        },
        methods: {
            cargarProductos(){
                apiProductos.productosPopulares().then(
                    (response) => {
                      this.productos = response.data.results
                    // console.log(response.data.results)
                    console.log(this.productos)
                    }
                )
            }
        },
        mounted(){
            this.cargarProductos()
        }
    }
</script>

<style>
.card-img {
    height: 200px;
}
.card{
    height: 400px;
    margin: 10px;
}
</style>