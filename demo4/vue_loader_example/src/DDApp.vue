<template lang="jade">
.dd
	comp-topbar
	comp-sidebar
	//- comp-beat

</template>

<script>
import CompTopbar from './components/CompTopbar.vue'
import CompSidebar from './components/CompSidebar.vue'
// import CompBeat from './components/CompBeat.vue'
import $ from 'jquery'
console.log('jquery:', $('body').text())
export default {
	data () {
		return {
			msg: 'chenjsh',
			user: {
				name: 'chenjsh36'
			}
		}
	},
	components: {
		CompTopbar,
		CompSidebar,
		// CompBeat
	}
}

</script>

<style lang="less">
* {
	padding: 0;
	margin: 0;
}
body {
	height: 100px;
	// width: 100px;
	// color: #333;
	// background-color: gray;
}
.dd {
	position: relative;
	width: 1200px;
	margin: 0 auto;
}

</style>