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
      let playerId = null
      if (state.currentPlayer.hasOwnProperty('name')) {
        playerId = state.currentPlayer.id
      }
      return playerId
    },
    getPlayerName: (state) => {
      let playerName = null
      if (state.currentPlayer.hasOwnProperty('name')) {
        playerName = state.currentPlayer.name
      }
      return playerName
    }
  },
  mutations: {
    SET_PLAYER: (state, data) => {
      let newPlayer = {
        id: uuid(),
        name: data
      }
      state.currentPlayer = newPlayer
    }
  },
  actions: {
    setPlayer: (context, data) => {
      context.commit('SET_PLAYER', data)
    }
  }
}

export default playerModule