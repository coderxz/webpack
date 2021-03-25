<template>
  <div class="warper">
    <Header :todos="todos" :addTodo="addTodo"/>
    <div class="warningContent" v-show="!this.todos.length">请添加你的任务</div>
    <List :todos="todos"
          :deleteTodo="deleteTodo"
          :updateTodo="updateTodo"
    />
    <Footer :todos="todos" :clearTodo="clearTodo" :checkAll="checkAll"/>
  </div>
</template>

<script>
import Header from "@components/Header";
import List from "@components/List";
import Footer from "@components/Footer";

export default {
  data() {
    return {
      todos: []
    }
  },
  mounted(){
    setTimeout(() => {
        this.todos = JSON.parse(localStorage.getItem('todos_key')) || []
    })
  },
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    addTodo(value) {
      console.log(value)
      this.todos.unshift(value)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    clearTodo() {
      const newToDo = this.todos.filter(item => !item.status)

      this.todos = newToDo
    },
    checkAll(isAll) {
      console.log(isAll)
      this.todos.forEach(item => {
        return item.status = isAll
      })
    },
    updateTodo(isCheck,todo){
      todo.status = isCheck
    }
  },
  watch:{
    todos:{
      handler: function (value) {
        localStorage.setItem('todos_key',JSON.stringify(value))
      },
      deep: true//深度监视,本身和内部所有数据
    }
  }
}
</script>

<style scoped>
.warningContent {
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  margin: 5px 0;
}
</style>