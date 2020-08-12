import Vuex from 'vuex'
import { SET_PLAYER } from './player-mutation-types'

let playerModule = {
  state: () => ({
    currentPlayer: {}
  }),
  getters: {
    getPlayer: (state) => {
      return state.currentPlayer
    }
  },
  mutations: {
    SET_PLAYER: (state, data) => {

    }
  },
  actions: {
    setPlayer: (context, data) => {

    }
  }
}

export default playerModule