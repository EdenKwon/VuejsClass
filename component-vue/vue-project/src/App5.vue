<script>
import RefChild from './components/RefChild.vue';

    export default {
        data(){
            return {
                parentNum : 10,
            }
        },
        computed : {
            nummOddEven() {
                return this.parentNum % 2 === 0 ? '짝수' : '홀수';
            },
        },
        methods : {
            getParentNum() {
              return this.parentNum;  
            },
        },
        components : {
            RefChild,
        },

        mounted() {
            console.log(this.$refs.childRef.childNum);
            console.log(this.$refs.childRef.childNumOddAdd);
            console.log(this.$refs.childRef.getChildNum());
        },
    }
</script>

<template>  
    <RefChild ref="childRef"/>
    
</template>

<style>

</style>