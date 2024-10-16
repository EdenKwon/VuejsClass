<script>
  export default {
    data : function() {
      return {
        fruits : ['apple', 'banana', 'pear', 'orange'],
        condition : true,
      };
    },
  }
</script>

<!-- mustach syntax -->
<template>
  <h1 v-show="condition"> fruits 데이터의 반복 결과 출력 </h1>
  <ul>
    <li v-for="(fruit,index) in fruits" :key="index">
      인덱스 : {{ index }}, 값 : {{ fruit }}
    </li>
  </ul>
</template>
<style>
  .bluecolor {
    color:blue;
  }
</style>