<template>
  <div class="page">
    <h2>Sign Up</h2>
    <div><input type="text" placeholder="Email" v-model="email"></div>
    <div><input type="password" placeholder="Password" v-model="password"></div>
    <button @click="handleSubmit"> Sign Up!</button>


  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default {
    setup(){
        const store = useStore();
        const email = ref("")
        const password = ref("")
        const router = useRouter()
     
		const handleSubmit = async () => {
			try {
				await store.dispatch("signup", { email: email.value, password: password.value });
				router.push("/");
			} catch (err) {
				alert(err.message)
			}
		};
        return{
            store, email, password, router, handleSubmit
        }
    }
}
</script>

<style scoped>

</style>