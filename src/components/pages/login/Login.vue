<template>
	<div class="login-page">
		<login-header></login-header>
		<login-nav
			:type = "type"
			:change-type = "changeType"
		></login-nav>
		<login-box></login-box>
	</div>
</template>

<script>
	import LoginHeader from '../../commons/header/loginHeader'
	import LoginNav from './loginNav'
	import LoginBox from './LoginBox' 
	
	export default {
		name : 'LoginPage',
		components : {
			LoginHeader,
			LoginNav,
			LoginBox,
		},
		data (){
			return {
				type :'fast'
			}
		},
		methods : {
			changeType (type){
				this.type = type
			}
		}
	}
</script>

<style lang="scss">
	
</style>