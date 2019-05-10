import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import builder from '@/pages/builder'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/builder',
			name: 'builder',
			component: builder
		}
	]
})
