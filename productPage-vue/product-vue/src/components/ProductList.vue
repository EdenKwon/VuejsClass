<script>
import App from '@/App.vue';

    export default{
        props:{
            fruits:Array,
        },
        methods: {
            selectFruit(fruit){
                this.$emit('select', fruit);
            }
        }
    }
</script>

<template>
    <h1>과일 목록</h1>
    <ol>
        <li v-for="fruit in fruits" :key="fruit.id" @click="selectFruit(fruit)">
            {{ fruit.name }} / {{ fruit.price }}
        </li>
    </ol>
</template>