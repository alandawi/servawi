import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import Home from './components/Home'
import Crossfit from './components/Crossfit'
import Weather from './components/Weather'
import Holidays from './components/Holidays'
import News from './components/News'

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
	{path: '/', component: Home},
	{path: '/crossfit', component: Crossfit},
	{path: '/weather', component: Weather},
	{path: '/holidays', component: Holidays},
	{path: '/news', component: News}
]

const router = new VueRouter({
	routes,
	mode: 'history',
});

new Vue({
	el: '#app',
	router,
  	render: h => h(App)
});