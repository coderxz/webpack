<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isShow" />
    </label>
    <span>
          <span>已完成{{ completedTodoList.length }}</span> / 全部{{ this.todos.length }}
        </span>
    <button class="btn btn-danger" @click="clearTodo" v-show="completedTodoList.length>0">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      completedTodo: []
    }
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    clearTodo: {
      type: Function,
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    }
  },
  computed: {
    completedTodoList() {
      return this.todos.filter(item => {
        return item.status === true
      })
    },
    isShow: {
      get() {
        return this.completedTodoList.length === this.todos.length &&this.todos.length>0
      },
      set(value){
        this.checkAll(value)
      }
    }

  },
  methods: {},
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>