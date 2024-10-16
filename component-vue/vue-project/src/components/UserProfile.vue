<script>
    export default {
        props: {
            name: {
                type : String,
                required : false,
                validator : function(value) {
                    return value.length > 1;
                }
            },
            company:String,
            age : {
                type : Number,
                default : function() {
                    return 10;
                }
            }
        },
        emits: ['print-hello'],
        methods : {
            parentEventCall() {
                this.$emit('print-hello','ssg',20);
            },
        }
    }
</script>

<template>
    <!-- $emit() 발신 방식을 인라인 핸들러 방식-->
    <button @click="$emit('print-hello','ssg', 20)">클릭</button>

    <!-- 메서드 핸들러 방식 -->
    <!-- <button @click="parentEventCall">클릭</button> -->
</template>