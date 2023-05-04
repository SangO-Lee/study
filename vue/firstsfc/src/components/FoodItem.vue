<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
        <p id="red" @:click="countClicks">You have clicked me {{ clicks }} times.</p>
    </div>
</template>

<script>
 export default{
    data(){
        return{
            name:'apples',
            message: 'I like apples',
            clicks: 0,
        }
    },
    methods:{
        countClicks(){
            this.clicks++
        }
    }
 }
</script>

<style></style>