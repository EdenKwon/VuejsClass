<script setup>
    import { useRouter } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    // useRoute.params.id;
    console.log(id);
</script>

<template>
    <h1>id : {{ id }}</h1>
</template>