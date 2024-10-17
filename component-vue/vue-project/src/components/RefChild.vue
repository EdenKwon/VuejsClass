<script>
    export default {
        data() {
            return {
                childNum : 1,
            };
        },

        computed : {
            childNumOddAdd() {
                return this.chilidNum % 2 === 0 ? '짝수' : '홀수';
            },
        },

        methods : {
            getChildNum() {
                return this.childNum;
            },
        },

        mounted() {
            console.log(this.$parent.parentNum);
            console.log(this.$parent.nummOddEven);
            console.log(this.$parent.getParentNum());
        }
    }
</script>

<template>
    <h1>RefChild</h1>
</template>