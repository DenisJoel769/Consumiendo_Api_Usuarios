<template>
    <div class="categorias">
            <ul class="lista_categorias">
                <li v-for="categoria in lista" :key="categoria.id" class="item_categorias">
         
                    <!-- <router-link :to="{name:'categoria'}" class="lista_item_link"></router-link> -->
                    <router-link 
                    class="lista_item_link"
               >  
                    {{categoria.name}}
                    </router-link>
                </li>
            </ul>
    </div>
</template>

<script>
import ApiCategoria from '@/components/ComponentCategorias/ApiCategoria'
    export default {
        name: 'ListaCategorias',

        data(){
            return {
                //array vacio en donde se guardara las listas de categorias
                lista: []
            }
        },
        methods:{
            cargarCategorias(){
                ApiCategoria.listaCategorias().then(
                    (response) => {
                        this.lista = response.data
                        // console.log('Listas', this.lista)
                        console.log("Lista de Categorias",this.lista)
                    }
                )
            }
        },
        beforeMount(){
            this.cargarCategorias();
        }
    }
</script>

<style>
.lista_categorias
{
    list-style: none;
    padding: 0px;

}
.item_categorias{
    display: block;
    margin: 10px;
}
.lista_item_link{
    text-decoration: none;
    color: black;
    font-family: sans-serif;
}
.item_categorias:hover{
    background: rgb(192, 212, 216);
}


</style>