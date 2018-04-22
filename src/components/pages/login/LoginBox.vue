<template>
	<div class="login-box">
		<login-phone></login-phone>
		<!--<login-name></login-name>-->
	</div>
</template>

<script>
	
	import LoginPhone from './loginPhone'
//	import LoginName from './loginName'
	
	export default {
		name : 'LoginBox',
		components : {
			LoginPhone,
//			LoginName,
		}
	}
</script>

<style lang="scss">
	
</style>