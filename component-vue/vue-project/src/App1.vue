<script setup>
import FirstChild from './components/FirstChild.vue';
import LocalChild from './components/LocalChild.vue';
import SecondChild from './components/SecondChild.vue';
import ThirdChild from './components/ThirdChild.vue';

// export default{
//     components: {
//         LocalChild,
//     },
// }
</script>

<template>
    <FirstChild/>
    <SecondChild/>
    <ThirdChild/>
    <LocalChild/>
</template>

<style>
    h1 {
        color: rgb(165, 118, 16);
    }

    p{
        color: rgb(28, 7, 88);
    }
</style>
