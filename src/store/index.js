import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 10,
    name: 'saya hendi',

  },
  mutations: {
    addNumber: function(state){
      state.num++
    },
    changeName: function(state){
      state.name = 'saya hajar aswat';
    }
  },
  actions: {
    cName: function({commit}){
      
      commit('changeName');
    }
  },
  modules: {
  }
})
