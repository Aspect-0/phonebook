<template>
    <div>
        <div class="outside">
            <div class="form">
                    <form ref="form"   @submit.prevent="onSubmit"  >
                        <div class="forms">

                            <button class="picker" @click="pickFile" >Profile Photo</button>
                            <input style='display:none' type="file" ref="pfp" accept="image/*" @change="updatePic">
                            <input type="text" v-model="name" placeholder="Name" required>
                            <input type="text" v-model="email" placeholder="Email" required>
                            <input type="text" placeholder="Numb" v-model="PNum" maxlength="9" required>

                        </div>

                        

                        <button class="buttons"
                        @click="submit"
                        >Submit</button>
                        <button  class="close buttons" @click="Toggle()"> Close </button>


                      

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
        const imageURL = null
        const error = ''
        return{
            name, email, PNum, store, imageURL, error
        }

    },
    methods:{

        pickFile(){
            this.$refs.pfp.click();
        },
        updatePic(event){
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf(".") <= 0) {
				alert("Please Add Valid Image");
				return 0;
			}
			const fileReader = new FileReader();
			fileReader.addEventListener("load", () => {
				this.imageURL = fileReader.result;
			});
			fileReader.readAsDataURL(files[0]);
        },


        submit(){
            this.store.commit('createContact2', {Number:this.PNum, name:this.name, email: this.email, pfp:this.imageURL})
           
            this.$refs['form'].reset();
            this.name = null
            this.email = null
            this.PNum = null
            this.imageURL = null
            
        },
        test(){
            return this.store.state.data;
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
.buttons {
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

.buttons::before {
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

.buttons:hover::before {
 width: 100%;
}
.close{
     top: 0;
    right: 2rem;

}
.forms{
    text-align: center;
}
.picker{
    width: 40%;
    height: 60px;
    border-radius: 40px;
    margin-bottom: 2rem;
    background-color: #31e981;
    border: 1px #25b965 solid;
}
input{
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 2px solid #25b965;
    height: 40px;
    font-size: 20px;
}

</style>