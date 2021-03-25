<template>
  <header class="todo-header">
    <input
        type="text"
        class="todo-input"
        placeholder="请输入你的任务名称,按回车键确认"
        @keyup.enter="CaddTodo"
        v-model="title"
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      title:''
    }
  },
  mounted(){
  },
  props:{
    todos:Array,
    addTodo:Function
  },
  methods:{
    CaddTodo(){
      if (this.title.trim()===''){
        alert('输入框不能为空!')
      }else{
        this.addTodo({id:Date.now(),title:this.title,status:false})
      }
      this.title = ''
    }
  }
}
</script>

<style scoped>
.todo-header input {
  width: 564px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 4px 7px;
  border-radius: 4px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.075);
}
</style>