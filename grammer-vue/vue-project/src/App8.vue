<script>

  export default {
    data() {
      return  {
        number : 0,
      };
    },
    methods: {
      increasement(){
        this.number++;
      },
      onKeyupHandler1(){
          console.log("enter키 눌렀습니닷");
      },
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <input type="text" @keyup="($event) => onKeyupHandler($event)">
  <input type="text" @keyup.enter = "onKeyupHandler1">
  <h1>{{ number }}</h1>
  <button type="button" @click="increasement">증가</button>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>