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

new Vue({
	el: '#ddz-header',
	data: {
		logo: '钉钉子',
		user: 'chenjsh36' 
	}
})
new Vue({
	el: '#ddz-histroy',
	data: {
		beats: [
			{
				cTime: 'Mon May 30 2016',
				desc: '没睡醒'
			}, 
			{
				cTime: 'Mon May 30 2016',
				desc: ''
			}, 
		]
	},
	methods: {
		addBeat: function() {
			var now = new Date();
			this.beats.push({
				cTime: now.toDateString(),
				desc: '无'
			})
		},
		rmBeat: function() {
			var length = this.beats.length;
			if ( length <= 0 )
				return;
			var random = parseInt(Math.random() * length);
			this.beats.splice(random, 1);
		}
	}
})