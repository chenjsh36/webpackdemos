import Vue from 'vue'
import VueRouter from 'vue-router'
// import DDApp from './DDApp.vue'

/* eslint-disable no-new */
/*
new Vue({
	el: 'body',
	components: { DDApp }
})
*/

Vue.use(VueRouter)
var Foo = Vue.extend({
	template: '<p>this is foo</p>'
})
var Bar = Vue.extend({
	template: '<p>this is bar</p>'
})

var App = Vue.extend({
})

var router = new VueRouter()

router.map({
	'/foo': {
		component: Foo
	},
	'/bar': {
		component: Bar
	},
	// '/ddapp': {
	// 	component: DDApp
	// }
	// '/ddapp': function (resolve) {
	// 	// console.log('DDApp', DDApp)
	// 	// return DDApp
	// 	// console.log('resolve:', resolve)
	// 	var DDApp = require('./DDApp.vue')
	// 	return DDApp
	// }
	'/ddapp': {
		component: function (resolve) {
			console.log('resolve:', resolve)
			return require(['./DDApp.vue'], resolve)
		}
	}
})

router.start(App, '#app')

