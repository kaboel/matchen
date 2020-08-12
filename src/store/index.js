import Vue from 'vue'
import Vuex from 'vuex'
import playerModule from "./modules/player/player-module";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    playerModule
  }
})

export default store
