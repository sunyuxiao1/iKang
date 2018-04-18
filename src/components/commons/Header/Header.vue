<template>
  <header class="app-header">
  
  		<div>
		    <span class="area">北京市</span>
		    <i class="iconfont icon-icon--"></i>
	    </div>
	    <span><img src="../../../assets/logo.png" alt="" /></span>
	    <span>
	    	<i class="iconfont icon-fenlei"></i>
	    	<i class="iconfont icon-xiaoxi"></i>
	    </span>
  	
  </header>
</template>

<script>
export default{
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
	.app-header{
		width:100%;
		height:0.44rem;
		background:#fafafa;
		display:flex;
		justify-content: space-around;
	    line-height: 0.44rem;
	    align-items: center;
	   img{
	   	width:1.17rem;
	   	height:0.27rem;
	   }
	   .area{
	   	  font-size:22px;
	   	  color:#333333;
	   }
	   span{
	   	i{
	   		font-size:24px;
	   	}
	   	.icon-fenlei{
	   		margin-right:10px !important;
	   		}
	   }
	}
</style>
