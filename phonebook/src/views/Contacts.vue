<template >
    <div class="home">
        <h2 class="head">Contacts</h2>
        <card-pop v-if="isActive == true"
        :Toggle="() => {   
            return this.isActive = false
            }"
        :contact="this.hoverStats"
        
        ></card-pop>
        <div class="body">
            <form ref="form"  @submit.prevent="onSubmit"  >
                <input type="text" v-model="name" placeholder="Name">
                <input type="text" v-model="email" placeholder="Email">
                <input type="text" placeholder="Numb" v-model="PNum" maxlength="9">
           
                <button @click="submit" >Submit</button>

            </form >


     

        <table>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>

            <tbody>

                <tr class="row" v-for="data in this.store.state.data"  :key="data.name"  @mouseover="console(data.name, data.email, data.Number)" @click="trigger" >
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
import CardPop from '../components/CardPop.vue';
export default {
  components: { CardPop },
    setup () {
        const store = useStore()
        const Data = []
       const name = ref("")
       const email = ref("")
        const PNum = ref('')
        const hoverStats = {}
        const isActive = ref(false)
        const trigger = ()=> {
            isActive.value = !isActive.value
        }
        store.commit("fbUser")
    

        return {
            store,Data, name, email, PNum,isActive, hoverStats, trigger
        }
    },
    methods:{
        submit(){
            this.store.commit('createContact2', {Number:this.PNum, name:this.name, email: this.email})
           
            this.$refs['form'].reset();
            this.name = null
            this.email = null
            this.PNum = null
        },
      
        console(name, email, number){
            this.hoverStats.name = name
            this.hoverStats.email = email
            this.hoverStats.number = number
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
    .row{
        transition: all .4s;
    }
    .row:hover{
        color: white;
    }
     
</style>