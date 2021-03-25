<template>
  <li @mouseenter="handle(true)" @mouseleave="handle(false)" :style="{background:ItemBGC}">
    <label>
      <input type="checkbox" v-model="isStatus"><span>{{todos.title}}</span>
      <button ref="ItemBtn"
              class="btn btn-danger item-btn-right"
              v-show="BtnIsShow"
              @click="deleteItem(todos.id)"
      >删除</button>
    </label>
  </li>
</template>

<script>
export default {
  props:{
    todos:Object,
    deleteTodo:{
      type:Function,
      required:true,
    },
    index:Number,
    updateTodo:{
      type:Function,
      required: true
    }
  },
  data(){
    return{
      BtnIsShow: false,
      ItemBGC:'#fff'
    }
  },
  methods:{
    handle(isEnter){
      if (isEnter){
        this.ItemBGC="rgba(0,0,0,.1)"
        this.BtnIsShow = true
      }else{
        this.BtnIsShow = false
        this.ItemBGC="#fff"
      }
    },
    deleteItem(){
      if (confirm('确认删除吗?')){
        this.deleteTodo(this.index)
      }
    }
  },
  mounted(){
    console.log(this.todos.status)
  },
  computed:{
    isStatus:{
      get(){
        return this.todos.status
      },
      set(value,a){
        console.log(a)
        this.updateTodo(value,this.todos)
      }
    }
  },
  watch:{

  }
}
</script>

<style scoped>
.todo-main li{
  padding: 5px;
  height: 30px;
  line-height: 30px;
  list-style: none;
  border-bottom: 1px solid #ccc;
}
.todo-main li:last-child{
  border: none;
}
.item-btn-right{
  float: right;
  cursor: pointer;
}
</style>