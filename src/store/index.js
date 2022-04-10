import { createStore } from 'vuex'
import localStorageService from '../services/localStorage'

export default createStore({
  state: () => {
    return {
      user: localStorageService.getUser() || null,
      token: localStorageService.getToken() || ''
    }
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getToken: state => {
      return state.token
    },
    isAuthenticated: state => {
      return state.token !== ''
    }
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload
      localStorageService.setUser(payload)
    },
    setToken: (state, payload) => {
      state.token = payload
      localStorageService.setToken(payload)
    }
  },
  actions: {
    
  }
})