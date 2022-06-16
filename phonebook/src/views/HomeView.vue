<template>
  <div>
    Hello
    <button @click="add" >Click me</button>
    <h2>{{test}}</h2>
  </div>
</template>

<script>    
import {useStore} from "vuex";
  export default {
    setup(){
      const store = useStore();
     
      return{
        store, 
      }
    },
    methods:{
      add(){
        this.store.commit("addTest")
        console.log(this.store.state.test)

      }
    },
    computed:{
      test(){
        return this.store.state.test
      }
    }
    
    
  }
</script>

<style lang="scss" scoped>

</style>