import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
	name: [],
	uploads: []
  },
  getters: {
	NAME: state => {
		return state.name
	},
	UPLOADS: state => {
		return state.uploads
	}
  },
  mutations: {
	INITIALISE: (state) => {
	  state.name = JSON.parse(localStorage.getItem('image'))
	},
	UPDATE: (state, upload) => {
	  state.uploads.push( upload )
	},
	ADD_IMAGE: (state) => {
	  var existing = JSON.parse(localStorage.getItem('image'))
	  if (existing) {
		existing.push( state.uploads )
		localStorage.setItem('image', JSON.stringify( existing ))
	  } else {
		localStorage.setItem('image', JSON.stringify( state.uploads ))
	  }
	},
	REMOVE_UPLOADS: (state) => {
		state.uploads = []
	}
  }
})