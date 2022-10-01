<template>
  <div>

  </div>

  <div class="container" style="margin-top: 10%">
      <router-view/>
  </div>
</template>


<script>
// import Menu from './components/Menu.vue'
  export default{
    name: "App",
    // components: {Menu},  
     data(){
      return{
        show: false,

      }
    }
  }
</script>
    
<style>
.fade-leave-to{
  opacity: 0;
}
.fade-leave-enter,
.fade-enter-active{
  transition: opacity 0.5s ease;
}
</style>
