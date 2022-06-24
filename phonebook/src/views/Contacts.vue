<template >
    <div class="home">
        <div class="center">
            <h2>Hello There</h2>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex';
export default {
    setup () {
        const store = useStore()

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
    .center{
        width:80%;
        min-height: 90vh;
        margin: auto;
        background-color: var(--background-color-2);

    }
    h2{
        color: var(--text-color);
    }
</style>