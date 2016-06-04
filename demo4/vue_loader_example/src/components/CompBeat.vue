<template lang="jade">
	.dd-beat
		button(v-on:click="addDZ") 点击加钉子
</template>
<script>
	export default {
		data () {
			return {
				msg: '钉钉子'
			}
		},
		methods: {
			addDZ (event) {
				alert('钉钉子')
				console.log('event ', event.target.tagName)
			}
		}
	}
</script>