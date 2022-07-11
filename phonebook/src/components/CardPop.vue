<template>
  
    <div class="Pop">
        <div class="popup">
             
            <h2>This is a popup</h2>
        </div>
    </div>

</template>

<script>
export default {
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
    background-color: gray;
    background: transparent;
    align-items: center;
    display: flex;
    justify-content: center;

    
    
}
.popup{

}
</style>