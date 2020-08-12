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
      return new Promise((resolve, reject) => {
        router.push({
          name: 'Main'
        }).then(() => resolve())
          .catch(err => reject(err))
      })
    }
  },
  modules: {
    playerModule
  }
})

export default store
