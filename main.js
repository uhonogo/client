import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import VueLocalStorage from 'vue-localstorage'
import VueCarousel from 'vue-carousel'

// styles
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
// store
import { store } from './store'

Vue.use(Vuex)
Vue.use(VueLocalStorage)
Vue.use(VueHead)
Vue.use(Vuetify)
Vue.use(VueCarousel);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	colors,
	render: h => h(App)
}).$mount('#app')
