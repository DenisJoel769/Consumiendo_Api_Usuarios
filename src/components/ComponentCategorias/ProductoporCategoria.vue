<template>
    <div class="categoria_producto">
             <div class="row">
                    <div class="col col-lg-4"  v-for="n in 12" :key="n">
                                <div class="card">
                                    <img
                                    :src="producto.main_image"
                                    class="card-img"
                                    alt="30px">
                                        <div class="card-body">
                                            <h5 class="card-title">producto de prueba</h5>
                                                <h6 class="card-precio">precio</h6>

                                            <a href="#" class="btn btn-primary">Comprar</a>
                                        </div>
                                </div>
                     </div>
               </div>
    </div>
</template>


<script>
import apiProductos from '@/components/api'
import Productos from '@/components/Productos.vue'
    export default {
        name: 'ProductoporCategoria',
        components: Productos ,
        data(){
            return {
                productos: []
            }
        },
        //para observar datos usamos el whatch
        watch: {
            // '$route.params.category': function (){

            //     this.filtrarProductos()
            // }
        },
        methods: {
            filtrarProductos(){
                // let filtros = 'category=' + this.$route.params.category
                // apiProductos.filtrarProductos(filtros).then(
                // (response) =>{
                //     this.productos = response.data.results
                //     // console.log(response.data.results)
                // }

                // )
              apiProductos.filtrarProductos().then(
                        
                    )
            }
        },
        beforeMount(){
            this.filtrarProductos()
        }
    }

</script>

<style lang="scss" scoped>

</style>