<script>
import UserProfile from './components/UserProfile.vue';

    export default {
        components : {
            UserProfile,
        },

        data() {
            return {
                name : '김진수', company : 'company', age : 30, 
            };
        }
    }
</script>

<template>  <!-- :age 컴포넌트 사용자 정의 속성을 v-bind (:) -->
    <UserProfile :name="name" :company="company" :age="age"/>    
</template>

<style>

</style>