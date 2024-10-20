<script setup>
  import {computed, ref, reactive} from 'vue';

  const refCount = ref(0);
  const reactiveCount = reactive({count : 0});

  const refDoubleCount = computed(()=>refCount.value + 2);
  const reactiveDoubleCount = computed(()=>reactiveCount * 2);

  //computed() 처리한 데이터는 value를 사용해야한다.
  console.log(refDoubleCount.value);
  console.log(reactiveDoubleCount.value);

</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
