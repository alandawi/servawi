// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Home from './components/Home'
import Crossfit from './components/Crossfit'
import Weather from './components/Weather'
import Holidays from './components/Holidays'
import Movies from './components/Movies'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
	{path: '/', component: Home},
	{path: '/crossfit', component: Crossfit},
	{path: '/weather', component: Weather},
	{path: '/holidays', component: Holidays},
	{path: '/movies', component: Movies}
]

const router = new VueRouter({
	routes,
	mode: 'history',
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
  	render: h => h(App)
});