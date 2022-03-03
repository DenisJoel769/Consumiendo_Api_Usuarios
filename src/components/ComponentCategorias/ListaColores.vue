<template>
    <div class="colores">
        <ul class="lista_colores">
            <li class="lista_colores_name" v-for="color in colores" :key="color.id">
                <a 
                href="#" 
                class="colores_link"
                :style="{ background: color.value }">
                
                 </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import ApiColores from '@/components/ComponentCategorias/ApiColores'
    export default {
        name: 'ListaColores',
        data(){
            return {
                colores: []
            }
        },
        methods: {
            cargarColores(){
                ApiColores.listarColores().then(
                    (response) => {
                        this.colores = response.data
                        console.log(this.colores)
                        // console.log(response.data)
                    }
                )
            }
        },
        beforeMount(){
            this.cargarColores();
        }
    }
</script>

<style>
    .lista_colores {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 0px;
    }
    .lista_colores_name{
        display: block;   
        margin-right: 3px;   
    }
    .colores_link{
        display: block;
        border: 1px solid rgb(22, 22, 20);
        width: 30px;
        height: 30px;
        text-decoration: none;
}
</style>