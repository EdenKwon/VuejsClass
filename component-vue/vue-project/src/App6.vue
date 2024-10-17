<script>
import CustomButton from './components/CustomButton.vue';
import DefaultLayout from './components/DefaultLayout.vue';
import DynamicLayout from './components/DynamicLayout.vue';

    export default{
        components :{
            CustomButton,
            DefaultLayout,
            DynamicLayout,
        },
        data() {
            return {
                dynamicHeader : 'header',
                dynamicMain : 'main',
                dynamicFooter : 'footer',
            };
        }
    }
</script>

<template>  
    <CustomButton>더블클릭</CustomButton>
    <DefaultLayout>
        <template v-slot:header>
            <header>
                <h1>Header 영역</h1>
            </header>
        </template>
        <template v-slot:main>
            <main>
                <h1>main 영역</h1>
            </main>
        </template>
        <template v-slot:footer>
            <footer>
                <h1>footer 영역</h1>
            </footer>
        </template>
    </DefaultLayout>
    <DynamicLayout>
        <template #[dynamicHeader]>
            <h2>동적 슬롯 연습 헤더</h2>
        </template>
        <template #[dynamicMain]>
            <h2>동적 슬롯 연습 메인</h2>
        </template>
        <template #[dynamicFooter]>
            <h2>동적 슬롯 연습 푸터</h2>
        </template>
    </DynamicLayout>   
</template>

<style>

</style>