<template >
    <div class="home">
        <h2 class="head">Contacts</h2>
        <div class="body">
            <div class="card">
                <h2 class="name">Steven Y</h2>
                <div class="info">
                   <h2>Tele: 123456789</h2>




                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    setup () {
        const store = useStore()
        store.commit("createTest", {name: "Steven"})
        store.commit("fbUser")
        console.log(store.state.user.uid)
        console.log(store.state.data)

        return {
            store,
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
        display: flex;
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
</style>