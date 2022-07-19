<template>
    <div>
        <div class="outside">
            <div class="form">
                    <form ref="form"  @submit.prevent="onSubmit"  >
                    <input type="text" v-model="name" placeholder="Name" required>
                    <input type="text" v-model="email" placeholder="Email" required>
                    <input type="text" placeholder="Numb" v-model="PNum" maxlength="9" required>
            
                    <button 
                    @click="Togg"
                    >Submit</button>

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
    position: relative;
}
</style>