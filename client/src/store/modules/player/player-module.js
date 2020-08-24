import Vuex from 'vuex'
import { v4 as uuid } from 'uuid'
import { SET_PLAYER } from './player-mutation-types'

let playerModule = {
  state: () => ({
    currentPlayer: {}
  }),
  getters: {
    getPlayer: (state) => {
      return state.currentPlayer
    },
    getPlayerId: (state) => {
      let currentPlayer = state.currentPlayer
      let playerId = null
      if (state.currentPlayer.id) {
        playerId = state.currentPlayer.id
      }
      return playerId
    },
    getPlayerName: (state) => {
      let currentPlayer = state.currentPlayer
      let playerName = null
      if (currentPlayer.name) {
        playerName = state.currentPlayer.name
      }
      return playerName
    }
  },
  mutations: {
    SET_PLAYER: (state, data) => {
      state.currentPlayer = {
        id: uuid(),
        name: data
      }
    }
  },
  actions: {
    setPlayer: (context, data) => {
      return new Promise((resolve, reject) => {
        try {
          context.commit('SET_PLAYER', data);
          context.dispatch('startGame');
          resolve()
        } catch (e) {
          console.log(e);
          reject(e)
        }
      })
    },
  }
}

export default playerModule