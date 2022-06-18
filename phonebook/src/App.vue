

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink v-if="!user" to="/signup">Sign Up</RouterLink>
    <RouterLink v-if="!user" to="/login">Login</RouterLink>
    <button v-if="user" @click="logout">Log Out</button>
    <RouterView/>

  </div>

</template>
<script >
import { RouterLink, RouterView } from 'vue-router';
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

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
