<template>
  <div class="login-name local">
  	<div class="name">
  		<span>账号</span>
  		<input type="text" placeholder="请输入用户名/手机号" />
  	</div>
  	<div class="name">
  		<span>密码</span>
  		<input type="text" placeholder="请输入密码" />
  	</div>
  	<login-btn-wrap></login-btn-wrap>
  </div>
</template>

<script>
	
	import LoginBtnWrap from './loginBtn'
	
export default {
	name : 'LoginName',
	components :{
		LoginBtnWrap,
	}
}
</script>

<style lang="scss">
	.name{
		width: 90%;
		height: 40px;
		margin: 0 auto;
		display: flex;
		position: relative;
		border-bottom: 1px solid #E3E3E3;
		span{
			font-size: 16px;
			width: 60px;
			height: 40px;
			line-height: 40px;
			display: block;
			text-align: right;
			padding-right: 8px;
			color: #000;
		}
	}
</style>
