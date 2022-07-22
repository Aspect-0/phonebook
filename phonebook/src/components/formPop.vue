<template>
    <div>
        <div class="outside">
            <div class="form">
                    <form ref="form"  @submit.prevent="onSubmit"  >
                        <input type="text" v-model="name" placeholder="Name" required>
                        <input type="text" v-model="email" placeholder="Email" required>
                        <input type="text" placeholder="Numb" v-model="PNum" maxlength="9" required>
                        
                        <button
                        @click="submit"
                        >Submit</button>
                        <button class="close" @click="Toggle()"> Close </button>

                    </form >
            </div>

        </div>

    </div>
</template>

<script>
import {ref} from 'vue';
import {useStore} from 'vuex';
export default {
    props:{Toggle: Function},
    setup(){
        const store = useStore()
         const name = ref("")
       const email = ref("")
        const PNum = ref('')
        return{
            name, email, PNum, store
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
        test(){
            return this.submit;
        }
    }
}
</script>

<style scoped>
.outside{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    background-color: #0000138b;
    align-items: center;
    display: flex;
    justify-content: center;
}
.form{
    background: #8dd7a9;
    height: 80%;
    position: relative;
    min-width: 30%;
    display: flex;
    border-radius: 1rem;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    padding-top: 5rem;
}
input{
    display: block;
    margin-bottom: 2rem;
    width: 30rem;
}
button {
 width: 5rem;
 height: 3rem;
 margin-top: 1rem;
 font-size: 1.5rem;
 border: none;
 outline: none;
 background: transparent;
 color: var(--background-color);
  
 font-weight: 700;
 position: absolute;
 
 
 z-index: 1;

}

button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 width: 0px;
 height: 1.5px;
 background-color: var(--background-color);
 z-index: -1;
 transition: all 0.3s;
}

button:hover::before {
 width: 100%;
}
.close{
     top: 0;
    right: 2rem;

}

</style>