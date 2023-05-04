<template>
    <div class="food-box" @:click="toggleFavorite" title="click to favorite">
        <h2><small v-show="favoriteVal">⭐Favorite⭐</small>{{ foodName }}</h2>
        <p>{{ foodDes }}</p>
    </div>
</template>

<script>
 export default{
    props:{
        foodName : {
            type: String,
            required: true,
        },
        foodDes : {
            type : String,
            required : false,
            default : 'This is the default description.',
            validator: function(value){
                if( 20<value.length && value.length<50){
                    return true;
                }else{
                    return false;
                }
            }
        } ,
        isFavorite : {
            type : Boolean,
            required : false,
            default : false,
        },
    },
    data(){
        return{
            favoriteVal : this.isFavorite
        }
    },
    methods:{
        toggleFavorite(){
            this.favoriteVal = !this.favoriteVal
            console.log(this.favoriteVal);
        }
    }
 }
</script>

<style>
.food-box{
    cursor: pointer;
}
h2 small{
    float: right;
    display: block;
    font-size:13px;
    text-align: right;
}
</style>