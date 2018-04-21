<template>
	<div class="nav-list">
		<div v-for = "i in arr" :key="i.id" class="list last">
			<span>{{i.title}} <img :src="i.img"/> </span>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		name : 'NavList',
		data (){
			return {
				arr : [
					{id:1 , title:"北京市" , img:"../../../../static/img/down.png"},
					{id:2 , title:"全部品牌" , img:"../../../../static/img/down.png"},
					{id:3 , title:"筛选" , img:"../../../../static/img/sand.png"}
				]
			}
		}
	}
</script>

<style lang='scss'>
	.nav-list{
		display: flex;
		position: fixed;
		top: 46px;
		left: 0;
		width: 100%;
		padding: .11rem 0;
		align-items: center;
		justify-content: space-around;
		border-top: 1px solid #dcdbe0;
		border-bottom: 1px solid #dcdbe0;
		position: relative;
		.list{
			border-right:1px solid #dcdbe0;
			display: flex;
			padding:0 36px;
			
			img{
				width: 15px;
				height: 15px;
				margin-left: 3px;
			}
			span{
				display: flex;
			}
		}
		.last{
			border: none;
			img{
				width: 15px;
				height: 15px;
				margin-top: 3px;
			}
		}
	}
</style>