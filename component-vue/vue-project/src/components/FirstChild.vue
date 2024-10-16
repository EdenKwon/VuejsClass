<script>
import { message, reversedMessage } from '@/keys.js';
    export default{
        inject : {
            customMessage : {
                from : message, // import로 불러온 symbol 값
                default: 'default hello',
            },
            customReverseMessage : {
                from : reversedMessage,
                default : 'default hello!',
            }
        }
    }
</script>
<template>
    <h1>{{ customMessage }}</h1>
    <h1>{{ customerReversedMessage }}</h1>
</template>    
    
<style>
    h1 {
        color: blue;
    }
    p {
        color: blueviolet;
    }
</style>