<template>
  <header class="app-header">
    <div class="head">
	  		<div>
			    <span class="area">北京市</span>
			    <i class="iconfont icon-icon--"></i>
		    </div>
		    <span><img src="../../../assets/logo.png" alt="" /></span>
		    <span>
		    	<router-link to="/classify">
		    	<i class="iconfont icon-fenlei"></i>
		    	</router-link>
		    	<i class="iconfont icon-iconfontzhizuobiaozhun023110"></i>
		    </span>
  	</div>
  	<div class="clearboth"></div>
  </header>
</template>

<script>
	import router from '../../../router'
export default{
  name:'AppHeader'
}
</script>

<style scoped lang="scss">
	.app-header{
		.head{
			  overflow: hidden;
				width:100%;
				height:0.44rem;
				background:#fafafa;
				display:flex;
				 position: fixed;
				 top:0;
				 z-index:999;
				 justify-content: space-around;
			   line-height: 0.44rem;
			   align-items: center;
			   border-bottom:1px solid #e6e6e6;
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
		.clearboth{
			height:0.44rem;
			width:100%;
		
		}
		
	}
</style>
