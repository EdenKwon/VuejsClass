<script>
  export default {
    data : function() {
      return {
        condition:'C'
      };
    },
  }
</script>

<!-- mustach syntax -->
<template>
  <h1 v-if="condition === 'A'"> Hello VueJS1! </h1>
  <h1 v-else-if="condition === 'B'"> Hello VueJS2! </h1>
  <h1 v-else="condition === 'C'"> Hello VueJS3! </h1>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>