import Vue from 'vue'
import App from './App'
productionSourceMap:false

const vm = new Vue({

  el:"#root",
  components:{
    App:App
  },
  template: '<App/>'
})