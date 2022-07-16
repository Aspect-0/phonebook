<template>
  
    <div class="Pop">
        <div class="popup">
            <h2>Name: {{contact.name}}</h2>
            <h2>Email: {{contact.email}}</h2>
            <h2>Number: {{contact.number}}</h2>
            <button class="close" @click="Toggle()"> Close </button>
            <button class="bottom" > Delete </button>
        </div>

    </div>

</template>

<script>
 
export default {
    props:{
        Toggle: Function,
        contact: Object, 
        
    },
    setup(){

        return{

        }
    }
}
</script>

<style scoped>
.Pop{
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
.popup{
    background: #8dd7a9;
    height: 80%;
    position: relative;
    min-width: 30%;
    display: flex;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
.bottom{
    bottom: 1.5rem;
    
    

}
.bottom:hover{
    color: red;
     transition: 00.4s;

}
.bottom::before{
    background-color: red;
   
}
</style>