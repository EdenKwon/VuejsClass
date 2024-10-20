<script setup>

import {computed, ref, reactive} from 'vue';

const refCount = ref(0);
const reactiveCount = reactive({count : 0});

const refDoubleCount = computed( {
  get() {
    return refCount.value + 2;
  },
  set(newValue) {
    refCount.value = newValue;
  },
});

const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2;
  },
  set(newValue) {
    reactiveCount.count = newValue;
  },
});

//computed() 처리한 데이터는 value를 사용해야한다.
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

setTimeout(()=> {
  refDoubleCount.value = 10;
  reactiveDoubleCount.count = 20;
}, 1000);

</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
