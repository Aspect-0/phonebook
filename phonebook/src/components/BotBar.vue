<template>
  <div class="bot">
    <div class="links">

        <a href="https://github.com/Aspect-0"><img src="../icons/github.png" alt="My Github (Opens in another tab)"></a>
        <a href="https://www.linkedin.com/in/steven-yan-5ba439243/"><img src="../icons/linkedin.png" alt="My LinkedIn (Opens in another tab)"></a>
      
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .bot{
        max-width: 100vw;
        height: 7rem;
        background-color: var(--background-color);
        display: flex;
        justify-content: space-around;
          vertical-align: middle;
  align-items: center;
    }
    .links{
        text-align: center;
        height: 90%;
        width: 30%;
        display: flex;
        justify-content: space-evenly;
          vertical-align: middle;
  align-items: center;
    }
    img{
        height: 5rem;
        width: 5rem;
    }
</style>