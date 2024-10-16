<script>

  export default {
    data() {
      return  {
        fruit: ['apple', 'banana', 'grape'],   //체크 true,미체크 false
      };
    },
    methods: {
      printData() {
        console.log(`fruit: ${this.fruit}`);
      },
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <form id="loginForm1">
    <input type="checkbox" id="fruit" v-model="fruit" value="apple">사과
    <input type="checkbox" id="fruit" v-model="fruit" value="banana">바나나
    <input type="checkbox" id="fruit" v-model="fruit" value="grape">포도
    <button type="button" @click="printData">버어트은</button>
  </form>

</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>