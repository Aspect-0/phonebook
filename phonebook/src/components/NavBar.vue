<template>
  <div class="nav">
    <RouterLink class="link" to="/">Home</RouterLink>
    <RouterLink class="link" to="/about">About</RouterLink>
    <RouterLink v-if="!user" class="link" to="/login">Login</RouterLink>
    <RouterLink v-if="!user" class="link" to="/signup">Sign Up</RouterLink>
    <RouterLink v-if="user" class="link" to="/" @click="logout">Log Out</RouterLink>
   

  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
 export default {
  setup(){
    const store = useStore()
    
    return{
      store, user: computed(() => store.state.user),
    }
  },
  methods:{ 
    logout(){
      this.store.dispatch("logout")
    }
  }
}
</script>


<style scoped>
@import "@/assets/base.css";

.nav{
  display: flex;
  justify-content: right;
  margin-bottom: 2rem;
}

.link{
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  margin-right: 2rem;
  margin-top: 0.5rem;
  border: none;
  font-weight: 300;
  background-color: transparent;
}

</style>