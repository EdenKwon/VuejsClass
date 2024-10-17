<script>
    export default{
        data(){
            return {
                inputMessage:'',
            };
        },
        emits: ['add-todo'],
        methods: {
            addTodo(){
                // console.log(this.inputMessage);
                this.$emit('addTodo', this.inputMessage);
                this.inputMessage='';
            },
        },
    }
</script>

<template>
    <div class="todo__input">
        <input v-model="inputMessage"
          type="text"
          class="todo__input-text"
          placeholder="할 일을 입력하세요."
          @keydown.enter="addTodo"
          />
        <button class="todo__input-btn" @click="addTodo">등록</button>
    </div>
</template>