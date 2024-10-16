<script>

  export default {

    methods: {
      onSubmitHandler(e) {
        e.preventDefault(); // 별도의 폼 전송 처리하겠다.
        console.log('Onsubmit Handler!');
      },
    }
  }
</script>

<!-- mustach syntax -->
<template>
  <form @submit="onSubmitHandler">
    <button type="submit">전송</button>
  </form>

</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>