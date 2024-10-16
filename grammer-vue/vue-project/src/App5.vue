<script>
  export default {
    data : function() {
      return {
        user:{
          name : 'ssg',
          company : 'ssg.com',
          gender : 'male',
          age: 30,
        },
      };
    },
  }
</script>

<!-- mustach syntax -->
<template>
  <h1 v-show="condition"> user 객체 출력 </h1>
  <ul>
    <li v-for="(value,key,index) in user" :key="index">
      {{ index + 1 }} : {{ key }} : {{ value }}
    </li>
  </ul>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>