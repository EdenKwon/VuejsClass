<script setup>
import {ref} from 'vue';

const arr1 = ref([10]); //배열로 반응형 데이터 생성
const arr2 = ref([10]);

setTimeout(
  ()=>{
    arr1.value = [10,20]; // 배열의 값 자체를 변경함
  }, 1000
);

setTimeout(
  ()=>{
    arr2.value.push(30);  // 배열의 요소를 변경함
  },2000
);
//배열은 반응형 데이터가 할당된 변수의 값 자체가 변경되면 반응하지만 , 배열 안 요소가 변경되면 반응하지 않음

</script>
<template>
  <h1>arr1: {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>
