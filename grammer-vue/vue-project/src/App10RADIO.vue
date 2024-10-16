<script>

  export default {
    data() {
      return  {
        gender: ['man', 'woman']   //체크 true,미체크 false
      };
    },
    methods: {
      printData() {
        console.log(`gender: ${this.gender}`);
      },
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <form id="loginForm1">
    <input type="radio" id="gender" v-model="gender" value="man">남자
    <input type="radio" id="gender" v-model="gender" value="woman">여자
    <button type="button" @click="printData">버튼</button>
  </form>

</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>