<template >
    <div class="home">
        <h2 class="head">Contacts</h2>
        <div class="body">
            <button @click="test">BUTTON</button>
            <form ref="form"  @submit.prevent="onSubmit"  >
                <input type="text" v-model="name" placeholder="Name">
                <input type="text" v-model="email" placeholder="Email">
                <input type="text" placeholder="Numb" v-model="PNum">
           
                <button @click="submit" >Submit</button>

            </form >


        <table>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>

            <tbody>
                
                <tr v-for="data in this.store.state.data" :key="data.name"  >
                    <td >{{data.name}}</td>
                    <td class="center">{{data.email}}</td>
                    <td class="center">{{data.Number}}</td>
                </tr>

            </tbody>

        </table>

        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
import {ref} from 'vue';
export default {
    setup () {
        const store = useStore()
        const Data = []
       const name = ref("")
       const email = ref("")
        const PNum = ref('')
        store.commit("fbUser")
      
        console.log(store.state.user.uid)
        console.log(store.state.data)

        return {
            store,Data, name, email, PNum,
        }
    },
    methods:{
        submit(){
            this.store.commit('createContact2', {Number:this.PNum, name:this.name, email: this.email})
            this.$refs.form.reset();
            this.name.value = null
            this.email.value = null
            this.PNum.value = null
        },
        test(){
            console.log(this.store.state.data)
        }
    },
    computed:{
        loggedIn(){
            console.log( this.store.state.user == null)
            return this.store.state.user
        },
      
    }
}
</script>

<style scoped>
    .home{
       
        min-height: 90vh;
        min-width: 100vw;
    }
    .head{
        max-width: 100vw;
        font-size: 3rem;
        margin-left: 5em;
        margin-bottom: 2rem;
        
     
    }
   
    .body{
        color: var(--text-color);
        max-width: 70%;
        min-height: 80vh;
        margin: auto;
        background-color: var(--background-color-2);
        border-radius: 5em;
    }
    h2{
        color: var(--text-color);
    }
    .card{
        width: 80%;
        margin: auto;
        background-color: var(--background-color);
        border-radius:5em;
        height: 5em;
    }
    table{
        font-size: 3rem;
        border-collapse: collapse;
        border-spacing: 1.5rem;
        width: 100%;
    }
    td{
        border-bottom: solid 1px var(--text-color);
        border-top: solid 1px var(--text-color);
          padding: 10px 15px;
    }
    .center{
        text-align: center;
    }
</style>