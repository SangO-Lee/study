<template>
  <div>
    <h1>Food</h1>
    <food-item food-name="Apples"
               food-des="Apples are a type of fruit that grow on trees."
               :is-favorite="true"/>
    <food-item food-name="Pizza"
               food-des="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
               :is-favorite="false"/>
    <food-item food-name="Rice"
               food-des="Rice is a type of grain that people like to eat."
               :is-favorite="false"/>
    <food-item food-name="Cake"
               :is-favorite="true"/>
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
.food-box{
  border:1px solid #000;
  display: block;
  width:400px;
  margin:0 0 10px;
  padding:20px;
 }
</style>
