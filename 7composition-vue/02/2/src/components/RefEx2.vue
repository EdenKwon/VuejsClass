<script setup>
import { ref } from "vue";
import RefEx2Child from "./RefEx2Child.vue";
const componentRef = ref(null);
setTimeout(() => {
  componentRef.value.number = 100;
  console.log(componentRef.value.number);
  console.log(componentRef.value.doubleNumber);
}, 2000);
</script>
<template>
  <RefEx2Child ref="componentRef" />
</template>