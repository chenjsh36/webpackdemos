// 定义
var MyComponent = Vue.extend({
	template: '<div>A custom Component</div>'

})

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例
new Vue({
	el: '#example'
})


Vue.component('child', {
	prop: ['msg'],
	template: '<span>{{msg}}</span>'
})
