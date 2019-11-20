import Vue from 'vue'
import Router from 'vue-router'

import home from './views/home.vue'
import position from './views/position.vue'



Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: home
		}, {
			path: '/position',
			name: 'position',
			component: position
		},









	]
})
