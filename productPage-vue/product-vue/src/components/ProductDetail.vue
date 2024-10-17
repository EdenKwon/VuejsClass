<script>
    export default {
        props: {
            selectedFruit: Object,
        },
    };
</script>

<template>
    <div v-if="selectedFruit">
        <h1>과일 상세 정보</h1>
        과일 이름 : {{ selectedFruit.name }} <br>
        과일 가격 : {{ selectedFruit.price }} <br>
        과일 재고 : {{ selectedFruit.stock }} <br>
    </div>
</template>