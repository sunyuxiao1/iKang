<template>
	<header class="branch-header">
		<div class="logo">
			<span>爱康国宾</span>
		</div>
		<div class="icon">
			<img src="../../../../static/img/map.png"/>
		</div>
	</header>
</template>

<script>

	
	export default {
		name : 'BranchHeader',
		
	}
</script>

<style lang="scss">
	
	.branch-header{
		width: 100%;
		height : 0.42rem;
		box-sizing: border-box;
		background : #fafafa;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		
		.logo{
			font-size: 0.18rem;
			color: #333;
		}
		.icon{
			display: flex;
			align-items: center;
			padding: 0 0.15rem 0 1.1rem;
			
			img{
				width: 0.24rem;
				height: 0.24rem;
			}
		}
	}
</style>