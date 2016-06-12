<template lang="jade">
.dd-topbar
	.pull-left 
		.logo 钉钉子
	.pull-right
		.user-name {{user.name}}
		a.link(v-link="{ path:'/foo'}") go to foo
		p 当前路由：{{$route.path}}
</template>

<script>
export default {
	data () {
		return {
			msg: 'I am top bar',
			user: {
				name: '陈坚生'
			}
		}
	}
}
</script>
<style lang="less">
.dd-topbar {
	box-sizing: border-box;
	position: relative;
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: #000000;
	padding: 0 15px;
	color: white;
	.pull-left {
		float: left;
	}
	.pull-right {
		float: right;
	}
	.logo {
		font-weight: bold;
		font-size: 16px;
	}
	.user-name {
		font-size: 14px;
	}
}
</style>