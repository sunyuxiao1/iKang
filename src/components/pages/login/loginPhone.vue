<template>
	<div class="login-phone local">
		<div class="box-wrap">
			<div class="phone-login-one">
				<span>手机号</span>
				<input type="text" placeholder="请输入手机号" />
				<img src="../../../../static/img/clear.png"/>
			</div>
			<div class="phone-login-tow">
				<span>图形码</span>
				<input type="text" class="text" placeholder="请输入图形验证码" />
				<img src="../../../../static/img/yzm.jpg"/>
			</div>
			<div class="phone-login-thr">
				<span>验证码</span>
				<input type="text" placeholder="请输入动态密码" />
				<button>获取验证码</button>
			</div>
		</div>
		<login-btn-wrap></login-btn-wrap>
	</div>
</template>

<script>
	
	import LoginBtnWrap from './loginBtn'
	
	export default {
		name : 'LoginPhone',
		components : {
			LoginBtnWrap,
		}
	}
</script>

<style lang="scss">
	.login-box{
		.box-wrap{
			margin:0 auto 40px;
			
				> div{
					width: 90%;
					height: 40px;
					margin: 0 auto;
					display: flex;
					position: relative;
					border-bottom: 1px solid #E3E3E3;
					span{
						font-size: 16px;
						line-height: 40px;
						color: #000;
						margin-right: 5px;
					}
					button{
						width: 100px;
						height: 35px;
						background: #ea5504;
						border: none;
						position: absolute;
						right: 5px;
						top: 3px;
						border-radius: 3px;
						color: #fff;
					}
				}
				.phone-login-one{
					
					> img{
						width: 20px;
						height: 20px;
						position: absolute;
						right: 9px;
						top: 8px;
						/*display: none;*/
					}
				}
				.phone-login-tow{
					> img{
						width: 100px;
						height: 35px;
						position: absolute;
						right: 5px;
						top: 3px;
					}
					.text{
						background: url("../../../../static/img/or.png") no-repeat 139px 0;
						
					}
				}
		}
		/*.btn-wrap{
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
		}*/
	}
</style>