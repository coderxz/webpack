<template>
  <ul class="todo-main">
    <Item
        v-for="(item,index) in todos"
        :key="item.id" :todos="item"
        :deleteTodo="deleteTodo"
        :index="index"
        :updateTodo="updateTodo"
    />
  </ul>
</template>

<script>
import Item from "@components/Item";

export default {
  data() {
    return {}
  },
  components: {
    Item
  },
  props:{
    todos:{
      todos:Array
    },
    deleteTodo:{
      type:Function,
      required:true
    },
    updateTodo:{
      type:Function,
      required: true
    }
  }
}
</script>

<style scoped>
.todo-main {
  border: 1px solid #ccc;
  margin: 10px 0;
  border-radius: 3px;
  padding: 0;
}
</style>