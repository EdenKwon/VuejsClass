<script>
  export default {
    data : function() {
      return {
        condition:false
      };
    },
  }
</script>

<!-- mustach syntax -->
<template>
  <h1 v-show="condition"> Hello VueJS1! </h1>
  <h1 v-show="!condition"> Hello VueJS2! </h1>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>