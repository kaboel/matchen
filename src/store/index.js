import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
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
    startGame: (context) => {
      router.push({
        name: 'Main'
      })
    }
  },
  modules: {
    playerModule
  }
})

export default store
