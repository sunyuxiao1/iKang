<template>
  <div class="login-btn-wrap">
    	<div class="btn-wrap">
			<input type="button" value="登录" class="loginBtn"/>
		</div>
		<div class="listA">
			<router-link to="/register">
			    <a href="#">手机注册</a>
			</router-link>
			<a href="#">忘记密码？</a>
		</div>
		<div class="pay">
			<img src="../../../../static/img/pay.png"/>
			<span>支付宝登录</span>
		</div>
  </div>
</template>

<script>
	
export default {
    name: 'LoginBtnWrap',
}


</script>

<style lang="scss">
	.btn-wrap{
			width: 95%;
			height: 40px;
			margin: 0 auto;
			.loginBtn{
				width: 100%;
				height: 40px;
				font-size: 18px;
				color: #fff;
				background:#ea5504 ;
				border-radius: 3px;
				margin-bottom: 10px;
			}
		}
		.listA{
				width: 95%;
				margin: 10px auto;
				display: flex;
				justify-content: space-between;
			a{
				margin-right: 5px;
				font-size: 14px;
				color: #000;
			}
		}
		.pay{
			width: 115px;
			height: 30px;
			display: flex;
			line-height: 30px;
			margin: 21% 36%;
			> img{
				width: 30px;
				height: 30px;
			}
			span{
				font-size: 15px;
				color: #000;
			}
		}
</style>
