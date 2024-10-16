<script>

  export default {
    data() {
      return  {
        coffee: ['americano', 'cafeLatte', 'vanillaLatte']   //체크 true,미체크 false
      };
    },
    methods: {
      printData() {
        console.log(`coffee: ${this.coffee}`);
      },
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <form id="loginForm1">
    <select v-model="coffee">
      <option value="americano">아메리카노</option>
      <option value="cafeLatte">카페라떼</option>
      <option value="vanillaLatte">바닐라라떼</option>
    </select>
    <button type="button" @click="printData">버튼</button>
  </form>

</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>