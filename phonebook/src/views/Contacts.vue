<template >
    <div class="home">
        <h2 class="head">Contacts</h2>
        <div class="body">

        <table>
            <th>Name</th>
            <th>Number</th>
            <th>Text</th>

            <tbody>
                
                <tr   >
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>

        </table>

        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    setup () {
        const store = useStore()
        const Data = []
        store.commit("createContact")
        store.commit("createContact2", {name: 'I DID IT'})
        store.commit("fbUser")
      
        console.log(store.state.user.uid)
        console.log(store.state.data)

        return {
            store,Data
        }
    },
    computed:{
        loggedIn(){
            console.log( this.store.state.user == null)
            return this.store.state.user
        }
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