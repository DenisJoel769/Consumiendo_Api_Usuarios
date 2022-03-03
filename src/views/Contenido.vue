<template>
    <div>

        <CatalogoContenido />
    </div>
    <router-view />
</template>
<script>

import CatalogoContenido from '@/components/CatalogoContenido.vue'

    export default {
    // components: CatalogoContenido,
    components: { CatalogoContenido }
}
</script>

<style lang="scss" scoped>

</style>