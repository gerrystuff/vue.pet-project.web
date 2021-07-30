import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boardgames: [],
    boardgame: {},
    favorites: [],
    loading: false
  },
  mutations: {
    SET_BOARDGAMES(state, boardgames) {
      state.boardgames = boardgames;
    },
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },
    SET_LOADING(state, newValue) {
      state.loading = newValue;
    },
    SET_BOARDGAME(state, boardgame) {
      state.boardgame = boardgame;
    }
  },
  actions: {
    list({commit}) {
      commit('SET_LOADING', true);
      axios.get('http://localhost:8080/boardgame')
      .then(res => commit('SET_BOARDGAMES', res.data))
      .finally(() => commit('SET_LOADING', false));
    },
    listFav({commit}){
      commit('SET_LOADING', true);
      axios.get('http://localhost:8080/favorites')
      .then(res => commit('SET_FAVORITES', res.data))
      .finally(() => commit('SET_LOADING', false));
    },
    addBoardgame({commit}, {params, onComplete, onError}) {
      axios.post('http://localhost:8080/boardgame', params)
      .then(onComplete)
      .catch(onError)
    },
    getBoardgame({commit}, {id, onComplete, onError}) {
      axios.get(`http://localhost:8080/boardgame/${id}`)
      .then(res => {
        commit('SET_BOARDGAME', res.data.result);
        onComplete(res);
      })
      .catch(onError);
    },
    editBoardgame({commit}, {id, params, onComplete, onError}) {
      axios.put(`http://localhost:8080/boardgame/${id}`, params)
      .then(onComplete)
      .catch(onError)
    },
    deleteBoardgame({commit}, {id, onComplete, onError}) {
      axios.delete(`http://localhost:8080/boardgame/${id}`)
      .then(onComplete)
      .catch(onError)
    }
  },
  modules: {
  }
})
