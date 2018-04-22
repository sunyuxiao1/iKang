<template>
	<div class="login-nav">
		<div 
			v-for = "nav in navs"
			:key = "nav.id"
			class="nav"
			:class="{active:type === nav.type}"
			@click="changeType(nav.type)"
		>
			<p>{{nav.title}}</p>
		</div>
		
		
		
		
	</div>
</template>

<script>
	
	export default {
		name : 'LoginNav',
		props : ['type','changeType'],
		data (){
			return {
				navs: [
					{id:1 , title:'手机快速登录' , type:'fast'},
					{id:2 , title:'用户密码登录' , type:'name'}
				]
			}
		}
	}
</script>

<style lang="scss">
	.login-nav{
		display: flex;
		width: 100%;
		position: absolute;
		align-items: flex-end;
		background: #fafafa;
		margin-top: 40px;	
		.nav{
			width: 50%;
			height:40px;
			text-align: center;
			p{
				height: 38px;
				font-size: 16px;
				line-height: 38px;
			}
			&.active{
				color:#ea5504 ;
				border-bottom: 2px solid #ea5504;
			}
		}
	}
</style>