<template>
	<div class="login-header">
		<div class="welcome-login">
			<i class="fa fa-angle-left">  </i>
			<p>欢迎登录爱康</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name : 'LoginHeader',
	}
</script>

<style lang="scss">
	.welcome-login{
		display: flex;
		width: 100%;
		height: 40px;
		background: #fafafa;	
		position: fixed;
		i{
			position: absolute;
			left: 0px;
			top: 0px;
			display: block;
			width: 35px;
			height: 40px;
			text-align: center;
			line-height: 40px;
			font-size: 30px;
		}
		p{
			width: 100%;
			height: 40px;
			text-align: center;
			line-height: 40px;
			font-size: 18px;
		}
	}
</style>