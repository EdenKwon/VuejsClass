<script>
import ProductDetail from './components/ProductDetail.vue';
import ProductList from './components/ProductList.vue';

  export default{
    data() {
      return {
        fruits:[
        {id:1, name:'바나나', price:1000, stock:10},
        {id:2, name:'오렌지', price:2000, stock:20},
        {id:3, name:'딸기', price:3000, stock:30},
        {id:4, name:'블루베리', price:4000, stock:40}, ],
        selectedFruit: null,
      };
    },
    components:{
      ProductList,
      ProductDetail,
    },
    methods:{
      selectFruit(fruit) {
        this.selectedFruit = fruit;
      }
    }
  }
</script>

<template>
  <ProductList :fruits="fruits" @select="selectFruit"/>
  <ProductDetail :selectedFruit="selectedFruit"/>
</template>

<style scoped>

</style>
