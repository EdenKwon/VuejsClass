<script>
import FirstChild from './components/FirstChild.vue';   // FirstChild 컴포넌트를 지역 등록하기 위해 불러온다.

    export default {
        components : {
            FirstChild,     //불러온 FirstChild 컴포넌트를 components 옵션 속성으로 지역 등록
        },
        data(){
            return {
                visible: true,      //visible 데이터를 정의하고 초기값으로 true 세팅
            };
        },
        beforeCreate(){
            console.log('beforeCreate');
        },
        created(){
            setTimeout(()=>{
                this.visible = false; //컴포넌트가 생성된 후 3초 뒤에 visible 데이터 값을 false 
            }, 3000);
        },
        beforeMount(){
            console.log('beforeMount');
        },
        mounted(){
            console.log('Mounted');
        },
        beforeUpdate(){
            console.log('beforeUpdate');
        },
        updated(){
            console.log('Updated');
        },
        beforeDestroy() {
            console.log('BeforeDestroy');
        },
        unmounted() {
            console.log('Unmounted');
        },
    }
</script>

<template>
    <FirstChild v-if="visible"/>
</template>

<style>

</style>
