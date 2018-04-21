<template>
	<div class="register-header">
		<div class="register-title">
			<i class="fa fa-angle-left">  </i>
			<p>注册</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name : 'RegisterHeader'
	}
</script>

<style>
	.register-title{
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