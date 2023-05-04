<template>
  <div>
    <h1>Food</h1>
    <food-item food-name="Apples"/>
    <food-item food-name="Pizza"/>
    <food-item food-name="Rice"/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        message: 'This is some text',
      };
    },
  };
</script>

<style scoped>
 #app > div{
  border:1px solid #000;
  display: block;
  width:400px;
  margin:10px;
  padding:20px;
 }
</style>
