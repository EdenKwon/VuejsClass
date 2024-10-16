<script>

  export default {
    data() {
      return  {
        message:''  //체크 true,미체크 false
      };
    },
    methods: {
      onChangeHandler($event) {
        this.message = $event.target.value;
        console.log(this.message);
      },
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <form id="loginForm1">
    <input type="text" @input="onChangeHandler($event)">
  </form>

</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>