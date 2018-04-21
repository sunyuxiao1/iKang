<template>
       <div class="detail-content">
       	   <div class="contentsort">
	       	   <span>默认排序</span>
	       	   <span>筛选</span>
       	   </div>
       	   <div class="contentbox">
       	   	    <div class=' detaillist' v-for="content in contents">
       	   	    	
		   	  	
		   	  	  	<div>
		   	  	  	   <img :src="content.picLink"  />
		   	  	  	</div>
		   	  	  	<div class="detailbox">
		   	  	  		<h5>{{content.name}}</h5>
		   	  	  		<p>{{content.description}}</p>
		   	  	  		<div class="detailmoney">
		   	  	  			<span>
		   	  	  				<i>￥<i>{{content.price}}</i><i>.</i><i>0</i></i>
		   	  	  			</span>
		   	  	  			<span class="yuyue">
		   	  	  				<span>{{content.haveBuyNumber}}<span>已预约</span></span>
		   	  	  			</span>
		   	  	  		</div>
		   	  	  	</div>
		   	  	  
		   	  	  </div>
       	   	   
       	   </div>
       	  
        </div>
</template>

<script>
	export default{
		name:'DetailContent',
		data(){
			return{
				contents:[]
			}
		},
		methods:{
			getcontents(){
				//
				this.$http.get('ik/appService/v2/product/homeProduct').then((res)=>{
					this.contents=res.data.results
				})
			}
		},
		created(){
			this.getcontents()
		}
	}
</script>

<style lang="scss" scoped>
      .detail-content{
      	width:100%;     
      
      	.contentsort{
      		width:100%;
      		height:0.4rem;
      		background:#FFFFFF;
      		margin-top:10px;
      		display: flex;
      		justify-content: space-around;
      		align-items: center;
      	}
      	.contentbox{
      		width:100%;
	  		height:100%;
	  		background:#FFFFFF;
	  	    .detaillist{
		  		width:100%;
		  		height:1.2rem;
		  		display:flex;
		  		border-bottom:1px solid #e8e8e8;
		  		overflow: hidden;
		  		margin-top:10px;
		  		
		  		img{
		  			width:0.9rem;
			  		height:0.7rem;
		  		}
		  		.detailbox{
		  			display: flex;
	  		    	flex-direction: column;
	  		    	height:0.7rem;
	  		    	margin-left:10px;
	  		    	
	  		    	justify-content: space-around;
	  		    	h5{
	  		    		font-size:16px;
	  		    		font-weight: bold;
	  		    		color:#717171;
	  		    	}
	  		    	p{
	  		    	    	font-size: 12px;
	  		    	    	color:#a3a3a3;
	  		    	    }
	  		    	.detailmoney{
	  		    		
	  		    		display:flex;
	  		    		width:1.87rem;
	  		    	    justify-content:space-between;
	  		    	    .yuyue{
	  		    	        font-size: 12px;
	  		    	    	color:#a3a3a3;
	  		    	    }	  		    		
	  		    	    i{
	  		    			color:#ed6d28;
	  		    	    }
	  		    	}	    	
		  		}
	  		}
      	}
      
      } 
   
</style>