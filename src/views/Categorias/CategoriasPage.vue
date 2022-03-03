<template>
    <div class="filtro_categorias container">
        <div class="row" style="margin-top: 90px;">
            <div class="col-3" style="margin-left: 20px;">
                <ListaCategorias />
            </div>
            <div class="col-8">
                <ListaColores />

                <!-- el router view llama a todos los hijos que puede tener un componente  -->
               <router-view></router-view> 
            </div>
        </div>       
    </div>

</template>

<script>

import ListaCategorias from '../../components/ComponentCategorias/ListaCategorias.vue'
import ListaColores from '../../components/ComponentCategorias/ListaColores.vue'
    export default {
    name: "CategoriasPage",
    components: { ListaCategorias, ListaColores }
}
</script>

<style lang="scss" scoped>

</style>