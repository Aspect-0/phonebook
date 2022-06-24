<template>
  <div class="page">
    <div class="first">
      <h2 class="slogan">Phonebook, for all your contacts made easy.</h2>
      <img class="icon" src="https://i.pinimg.com/originals/a8/b9/49/a8b949e35c3ecf30148a6cfa189e316d.png" alt="">
    </div>
    <div class="second">
      <div class="secondText">
      <h2>Why Phonebook?</h2>
      </div>

      <div class="reasons">
        <div class="card">
          <div class="img">
          <img class="rIcon" src="../icons/clipboard.png" alt="">

          </div>
          <p class="explain">
            Phonebook allows you to record names, contact information, and location of your friends and coworkers.
          </p>
       
      </div>
        
        <div class="card">
          <div class="img">
          <img class="rIcon" src="../icons/clipboard.png" alt="">

          </div>
          <p class="explain">
            Phonebook allows you to record names, contact information, and location of your friends and coworkers.
          </p>
       
      </div>

    </div>
  </div>
    <BotBar/>
  </div>
</template>

<script>    
import {useStore} from "vuex";
import BotBar from '../components/BotBar.vue';
  export default {
    setup(){
      const store = useStore();
     
      return{
        store, 
      }
    },
    
    components: { BotBar },
    
  }
</script>

<style scoped>

.first{
  font-size: 3rem;
  text-align: center;
  padding-top:10%;
  padding-right: 20%;
  padding-left: 20%;
  color: var(--text-color);
  min-height: 100vh;
  
}
.slogan{
  margin-bottom: 3rem;
  
}
.icon{
  margin:auto;
  transition: 1s;
  
    animation: mover 3s infinite ;
}
   
@keyframes mover {
    0% { transform: translateY(0); }
    
    
    50% {transform: translateY(-20px);}
    100% {transform: translateY(0px);}
}
.second{
  background-color: white ;
  min-height: 96vh;
}
.secondText{
  color: var(--background-color);
  font-size: 3rem;
  text-align: center;
  padding-top: 3rem;
  
}
.reasons{
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  justify-content: space-around;

}
.card{
 
  border-radius: 4rem;
  width: 30%;
  height: 40rem;

  background-color: var(--text-color-2);
}
.img{
  text-align: center;
}
.rIcon{
  height: 128px;
  text-align: center;
}
.explain{
  width: 80%;
  margin: auto;

}
</style>