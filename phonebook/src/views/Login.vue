<template>
  <div class="page">
    <div class="form">
        <h2>To continue, log in to Phonebook.</h2>
        <div><input type="email" placeholder="Email" v-model="email" required></div>
        <div><input type="password" ref="pass" placeholder="Password" v-model="password" required></div>

        <button  @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from 'vuex';

export default {
    setup(){
        const store = useStore();
        const email = ref("")
        const password = ref("")

        const router = useRouter()
        const login = async () => {
			try {
				await store.dispatch("login", { email: email.value, password: password.value });
				router.push("/");
			} catch (err) {
         
        alert(err.message)
        
			}
		};
        return{
            email, password, router, login,
        }
    },
    
}
</script>

<style scoped >
@import "@/assets/base.css";

.form{
  color: var(--text-color);
  width: 60%;
  font-weight:300;
  font-size: 1.7rem;
  margin: auto;
  text-align: center;
}
h2{
  margin-bottom: 2rem;
}
input{
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: var(--text-color-2);
  border-bottom: 2px solid transparent;   
  transition: 0.7s;
}
input:focus{
  text-decoration: none;
  outline: none;
  border-bottom: 2px solid var(--secondary);
}


button {
 width: 9rem;
 height: 3rem;
 margin-top: 1rem;
 font-size: 1.5rem;
 border: none;
 outline: none;
 background: transparent;
 color: var(--text-color);
 font-family: 'Times New Roman', Times, serif;
 font-weight: 700;
 position: relative;
 transition: all 0.5s;
 z-index: 1;
}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 5px;
 height: 100%;
 background-color: var(--text-color);
 z-index: -1;
 transition: all 0.5s;
}

button:hover::before {
 width: 100%;
}

button:hover {
 color: var(--background-color);
}



 

</style>