import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: [],
    uploads: [],
    card_logo: [],
    card_background: []
  },
  getters: {
    NAME: state => {
      return state.name
    },
    UPLOADS: state => {
      return state.uploads
    },
    UPLOADS_LENGTH: state => {
      return state.uploads.legth
    },
    CARD_LOGO: state => {
      return state.card_logo
    },
    CARD_BG: state => {
      return state.card_background
    }
  },
  mutations: {
    INITIALISE_IMAGES (state) {
      state.name = JSON.parse(localStorage.getItem('image'))
    },
    INITIALISE_LOGO (state) {
      state.card_logo = JSON.parse(localStorage.getItem('logoType'))
    },
    INITIALISE_BG (state) {
      state.card_background = JSON.parse(localStorage.getItem('card_bg'))
    },
    UPDATE: (state, upload) => {
      state.uploads.push(upload)
    },
    ADD_IMAGE: state => {
      var existing = JSON.parse(localStorage.getItem('image'))

      if (existing) {
        for (var i = 0; i < state.uploads.length; i++) {
          existing.push(state.uploads[i])
        }
        localStorage.setItem('image', JSON.stringify(existing))
      } else {
        localStorage.setItem('image', JSON.stringify(state.uploads))
      }
    },
    REMOVE_UPLOADS: state => {
      state.uploads = []
    },
    REMOVE_IMAGE__FROM_NAME: (state, index) => {
      return state.name.splice(index, 1)
    },
    REMOVE_IMAGE__FROM_UPLOADS: (state, index) => {
      return state.uploads.splice(index, 1)
    },
    SELECT_CARD_LOGO: (state, logo) => {
      return (state.card_logo = logo)
    },
    SELECT_CARD_BG: (state, bg) => {
      return (state.card_background = bg)
    }
  },
  actions: {
    SELECT_CARD_LOGO ({ commit, state }, logo) {
      commit('SELECT_CARD_LOGO', logo)
      localStorage.setItem('logoType', JSON.stringify(state.card_logo))
    },
    SELECT_CARD_BG ({ commit, state }, bg) {
      commit('SELECT_CARD_BG', bg)
      localStorage.setItem('card_bg', JSON.stringify(state.card_background))
    },
    INITIALISE ({commit}) {
      commit('INITIALISE_IMAGES')
      commit('INITIALISE_LOGO')
      commit('INITIALISE_BG')
    },
    REMOVE_IMAGE__FROM_NAME ({commit, state}, id) {
      commit('REMOVE_IMAGE__FROM_NAME', id)
      localStorage.setItem('image', JSON.stringify(state.name))
    }
  }
})
