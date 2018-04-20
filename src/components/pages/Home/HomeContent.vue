<template>
	<div class="home-content">
	   <div class="content">
	   	  <div class="contenttop">
	   	  	 <h4>商品推荐</h4>
	   	  	 <span>查看全部></span>
	   	  </div>
	   	  <div class="contentbottom topmargin" v-for="content in listcontents">
		   	  	  <div class="contents" >
		   	  	  	<div>
		   	  	  	   <img :src="content.picLink"  />
		   	  	  	</div>
		   	  	  	<div class="contentbox">
		   	  	  		<h5>{{content.name}}</h5>
		   	  	  		<p>{{content.description}}</p>
		   	  	  		<div class="money">
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
  </div>
</template>

<script>
export default{
  name:'HomeContent',
  data(){
     	return {
     		listcontents:[],
     	}
     },
     methods:{
     	getcontentitem(){
     		//https://ikapp.health.ikang.com
     		this.$http('http://localhost:8080/ik/appService/v2/product/homeProduct')
     		.then(res=>{
     			this.listcontents=res.data.results;
     			console.log(this.listcontents)

     		})
     	}
     	
     },
     created(){
     
     	  this.getcontentitem();
     }
     
}
</script>

<style lang="scss" scoped>
.home-content{
	height:15rem;
	margin-top: 10px;
	width:100%;
	padding-left:0.16rem;
	background:#fff;
	.content{
		  display: flex;
	  	  flex-direction:column;	  	 
          display:flex;
          padding-right:10px;
          
	  	  .contenttop{
	  	  	width:100%;
	 	    height:0.38rem;
	 	    justify-content:space-between;
	 	    display:flex;	 	    
	 	    align-items:flex-end;
	 	    
	 	    h4{	 	    	
	 	    	font-size: 17px;
	 	    	font-weight: bold;
	 	    	color:#333333;
	 	    	line-height: 30px;	 	    	
	 	     }
	  	}
	  	.contentbottom{
	  		width:100%;
	  		height:1.2rem;
	  		display:flex;
	  		border-bottom:1px solid #e8e8e8;
	  		flex-wrap: wrap;
	  		.contents{
	
	  			display:flex;
	  		    justify-content:space-around;
	  		    padding-top:10px;
	  		    img{	  		    	
			  			width:0.9rem;
			  			height:0.7rem;
	  		       }	  		    
	  		    .contentbox{
	  		    	display: flex;
	  		    	flex-direction: column;
	  		    	height:0.7rem;
	  		    	margin-left:30px;
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
	  		    	.money{
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
}
</style>