<script>
import { mergeAlias } from 'vite';

  export default {
    methods: {
      clickHandler(event, message){
        console.log(event);
        console.log(message);
      }
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <button type="button" @click="clickHandler($event, 'Hello')">클릭1</button>
  <button type="button" @click="clickHandler($event)">클릭2</button>
  <button type="button" @click="($event)=>clickHandler($event)">클릭3</button>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>