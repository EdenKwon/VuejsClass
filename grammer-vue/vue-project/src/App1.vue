<script>
  export default {
    data : function() {
      return {
        visible: true,
        unvisible : false,
      };
    },
  }
</script>

<!-- mustach syntax -->
<template>
  <h1 v-if="visible"> Hello VueJS1! </h1>
  <h1 v-if="unvisible"> Hello VueJS2! </h1>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>