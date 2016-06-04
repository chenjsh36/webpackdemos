<template lang="jade">
.dd-sidebar
	ul.dd-list(v-if="show")
		li(v-for="item in beats" transition="dd-list")
			span 创建日期：{{item.cTime}}
			span 备注： {{item.desc}}
	//- button(v-on:click="add") add	
	//- button(v-on:click="remove") remove	
	//- button(v-on:click="hide") hide
	//- button(v-on:click="showul") show
.dd-content
	comp-drawbeats(v-bind:beats="beats" v-on:child-fader="childFader" v-on:child-addbeat="childAdd")
</template>

<script>
import CompDrawbeats from './CompDrawbeats.vue'

export default {
	data () {
		return {
			show: true,
			beats: [
				// {
				// 	cTime: 'Tue May 31 2016',
				// 	desc: '睡觉',
				// 	deep: 10,
				// 	id: 0,
				// 	left: '0px',
				// 	top: '0px',
				// 	opacity: 1,
				// },
			],
			name: 'CompSidebar',
			maxdeep: 10,
		}
	},
	methods: {
		hide: function() {
			this.show = false;
		},
		showul: function() {
			this.show = true;
		},
		greet: function (event) {
			alert('hello' + this.name);
		},
		// 自添加钉子
		add: function() {
			var cTime = new Date()
				, desc = '默认'
				;
			this.beats.push({
				cTime: cTime.toDateString(), 
				desc: desc, 
				deep: this.maxdeep, 
				id: cTime.getTime(),
				left: 0,
				top: 0,
				opacity: 1,
			});
		},
		// 随机删除钉子
		remove: function() {
			var length = this.beats.length
				, ran = parseInt(Math.random() * length)
				;
			this.beats.splice(ran, 1);
		},
		// 根据子组件提供的位置去新建钉子
		childAdd: function(position) {
			console.log('childAdd:', position);
			var cTime = new Date()
				, desc = '默认'
				;
			this.beats.push({
				cTime: cTime.toDateString(), 
				desc: desc,
				deep: this.maxdeep,
				id: cTime.getTime(),
				left: position.left,
				top: position.top,
				opacity: 1,
			});
			console.log(this);
			this.showul();
		},
		// 根据子组件提供的id去一次次拔钉子
		childFader : function(id) {
			var beats = this.beats;
			console.log('child-fader:!!!', id, beats);
			for (var i = 0, len = beats.length; i < len; i++) {
				console.log(this.beats[i]['id'])
				if (beats[i]['id'] == id) {
					var deep = beats[i]['deep'];
					if (deep - 1 == 0) {
						this.beats.splice(i, 1);
						// deep--;
					}
					else {
						this.beats[i]['deep']--;
						this.beats[i]['opacity'] = parseFloat(this.beats[i]['deep'] / this.maxdeep);
					}
					console.log(this.beats[i]);
					break;
				}
			}
		}
	},
	components: {
		CompDrawbeats
	}

}
</script>
<style lang="less">
.dd-sidebar {
	float: right;
	width: 400px;
	padding: 0 0;
	.dd-list {
		max-height: 513px;
		overflow: auto;		
	}

}
.dd-content {
	width: 800px;
	float: left;
}
/* 渐变动画 */
	.dd-list-transition {
		transition: all .3s ease;
		// height: 30px;
		padding: 10px;
		background-color: #eee;
		overflow: hidden;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.dd-list-enter, .dd-list-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
</style>