<template>
  <div class="nav">
    <RouterLink class="link" to="/">Home</RouterLink>
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
  position: sticky;
  z-index: 2;
  top:0px;
  display: flex;
  justify-content: right;
  height: 3rem;
  vertical-align: middle;
  align-items: center;
  background-color: var(--background-color);

}

.link{
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--text-color);
  margin-right: 2rem;
  height: 2rem;
  padding: none;
  border: none;
  font-weight: 300;
  background-color: transparent;
}

</style>