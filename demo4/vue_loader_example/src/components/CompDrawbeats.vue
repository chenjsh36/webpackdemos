<template lang="jade">
.dd-show-beats
	.dd-show-beats-area(v-on:click="addbeat")
		ul
			li.item(v-for="item in beats" transition="dz" id="{{item.id}}" v-on:click="fader" style="left:{{item.left}};top:{{item.top}};")
					//- span {{item.opacity}}
	.dd-show-beats-select
		label(v-on:click="checkStatus" alt="beat" class="status active")
			| 钉钉子
		label(v-on:click="checkStatus" alt="fade" class="status")
			|拔钉子
</template>

<script>
import $ from 'jquery'
// Vue.transition('fade', {
// 	css: false,
// 	enter: function(el, done) {
// 		$(el)
// 			.css('opacity', 0)
// 			.animate({opacity: 1}, 1000, done)
// 	},
// 	enterCancelled: function (el) {
// 		$(el).stop()
// 	},
// 	leave: function (el, done) {
// 		// 与 enter 相同
// 		$(el).animate({ opacity: 0 }, 1000, done)
// 	},
// 	leaveCancelled: function (el) {
// 		$(el).stop()
// 	}
// })

export default {
	data () {
		return {
			msg: 'drawbeats',
			status: 'beat'
		}
	},
	props: ['beats'],
	methods: {
		checkStatus: function(event) {
			$('.dd-show-beats .status').removeClass('active');
			$(event.target).addClass('active');
			this.status = event.target.getAttribute('alt');
		},
		addbeat: function(event) {
			// 状态不在钉钉子
			if (this.status != 'beat')
				return;
			// 若点击的位置有钉子
			if (event.target.getAttribute('class').indexOf('item') !== -1)
				return;
			console.log(event, event.target, event.target.getAttribute('class'));
			var mouseX = event.clientX
				, mouseY = event.clientY
				, offsetTop = event.target.offsetTop
				, offsetLeft = event.target.offsetLeft
				, scrollTop = 0
				, scrollLeft = 0
				, userAgent = navigator.userAgent
				;
			var dd = document.querySelector('.dd');
			var ddOffsetLeft = dd.offsetLeft;
			if (userAgent.indexOf('Chrome') != -1) {
				// 谷歌浏览器 webkit内核 360浏览器、qq浏览器
				scrollTop = document.body.scrollTop;
				scrollLeft = document.body.scrollLeft;
			} else {
				// 火狐浏览器 IE浏览器
				scrollTop = document.documentElement.scrollTop;
				scrollLeft = document.documentElement.scrollLeft;
			}

			var position = {
				left: mouseX - offsetLeft - ddOffsetLeft + scrollLeft - 25 + 'px',
				top: mouseY - offsetTop + scrollTop - 25 + 'px'
			}
			console.log(mouseX, mouseY, offsetLeft, offsetTop, );
			this.$dispatch('child-addbeat', position);
		},
		fader: function(event) {
			if (this.status != 'fade')
				return;
			event.preventDefault();
			event.stopPropagation();
			var item = $(event.target).closest('.item');
			var id = item.attr('id');
			this.$dispatch('child-fader', id);
		}
	}
}
</script>

<style lang="less">
.dd-show-beats {
	.dd-show-beats-area {
		position: relative;
		width: 100%;
		height: 513px;
		overflow: hidden;
		border: 1px solid #C14848;
		box-shadow: 3px 0px 2px 0px #C14848;
		ul li {
			position: absolute;
			list-style: none;
		}
		.item {
			// position: absolute;
			// border: 1px solid #333;
			// // position: relative;
			// height: 50px;
			// width: 50px;
			// background-color: #DBA0A0;
			// border-radius: 50%;
			// transition: 3s all;
		}	
	}
	.dd-show-beats-select {
		margin-top: 10px;
		.status {
			box-sizing: border-box;
			position: relative;
			padding: 10px 15px;
			height: 30px;
			line-height: 30px;
			cursor: pointer;
			z-index: 1;
			&:nth-of-type(1):before {
				content: 'D'
			}
			&:nth-of-type(2):before {
				content: 'B'
			}
			
			&:before {
				text-align: center;
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				// background-color: rgba(255, 255, 255, 0.5);
				background-color: #7E7EFF;
				transition: .3s all;
				width: 100%;
				height: 100%;
				transform-origin: 50% 50%;
				transform: scale(0,0);
				z-index: 0;
				font-size: 16px;
				font-weight: bold;
				line-height: 36px;
				border-radius: 50%;
			}
			&:hover {
				&:before {
					transform: scale(1, 1);
					border-radius: 2px;
				}
			}
			&.active {
				color: red;
				font-weight: bold;
			}
		}
	}

}

.dz-transition {
	transition: all .3s ease;
	position: absolute;
	height: 50px;
	width: 50px;
	background-color: #7E7EFF;
    box-shadow: 0px 0px 5px 1px #000;
	border-radius: 50%;
	transform-origin: 25px 25px;
}
/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.dz-enter, .dz-leave {
	opacity: 0;
}
</style>