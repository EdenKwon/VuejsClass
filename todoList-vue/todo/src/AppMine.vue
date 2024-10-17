<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

  export default{
    components:{
      TodoHeader,
      TodoInput,
      TodoList,
    },
    data() {
      return {
        todo:[],
        currentData: 'all', //현재 목록 상태를 관리할 수 있도록 정의한 데이터
      };
    },
    methods:{
      addTodo(inputMessage){
        const item = {
          id : Math.random(),     //각 메세지 관리를 위한 id
          msg : inputMessage,   // 할 일 메세지
          completed : false, // 할 일 완료 여부 체크
        };
        this.todo.push(item);
      },
      updateTab(tab) {
        this.currentData = tab;
      },
    },
  }
</script>

<template>
  <div class="todo">
    <!-- 정의한 currentData 데이터를 Todoheader 컴포넌트에 전달 -->
    <TodoHeader :currentData @update-tab="updateTab"/>
    <TodoList/>
    <TodoInput @add-todo="addTodo"/>
  </div>

</template>

<style scoped>

</style>
