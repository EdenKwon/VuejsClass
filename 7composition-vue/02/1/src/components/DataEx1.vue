<script setup>
import {ref} from 'vue';

  const count = ref(0); //기본 자료형 사용
  const state = ref(
    {
      count : 0,    //참조 자료형 사용
    }
  );
  setTimeout(
    ()=>{
      count.value++;
    }, 1000
  );
  setTimeout(() => {
    state.value.count++;
  },2000);
  
  console.log(count.value);
  console.log(state.value.count);
  // 반응성이 유지되는 범위에 주목
  // ref()함수로 생성되어진 반응형 데이터는 인수 값 자체에 반응성을 부여한다.
  // 숫자난 기본 자료형 값은 반응하지만 
</script>
<template>
  <h1>count : {{ count }}</h1>
  <h1>state : {{ state.count }}</h1>
</template>
