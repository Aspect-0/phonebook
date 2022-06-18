

<template>
  <div class="page">
    <NavBar/>

    <RouterView/>

  </div>

</template>
<script >
import NavBar from "./components/NavBar.vue"


export default {
  setup(){

  },
  components: {
    NavBar
  }

}
  

</script>

<style>
@import '@/assets/base.css';

#app{
  min-height: 100vh;
  background-color: var(--background-color);
  font-family: var(--font-family);
}

</style>
