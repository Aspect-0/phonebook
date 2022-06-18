<template>
  <div class="page">
    <h2>Login</h2>
    <div><input type="email" placeholder="Email" v-model="email"></div>
    <div><input type="password" placeholder="Password" v-model="password"></div>
    <div v-if="errMsg">{{errMsg}}</div>
    <button @click="login">Login</button>
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
        const errMsg = ref()
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
            email, password, router, login, errMsg,
        }
    }
}
</script>

<style scoped >

</style>