<template>
   <div class="current ">
   	  <div class="box currentbox ">
	   	  <div class="currenttop">
	   	  	 <h4>爱康情报站</h4>
	   	  	 <span>查看全部></span>
	   	  </div>
	   	  <div class="currentbottom topmargin">
	   	  	   <div class="box">
	   	  	   	
	   	  	   
		   	  	  <div class="currents" v-for="current in currents">
		   	  	  	<img :src="current.imgUrl"  />
		   	  	  	<p>{{current.title}}</p>
		   	  	  	<span>{{current.postDate}}</span>
		   	  	  
		   	  	  </div>
	   	  	   </div>
	   	  	  
	   	  </div>
   	 </div>
   </div>
</template>

<script>
export default{
   name: 'Current',
   data(){
     	return {
     		currents:[],
     		currentPage:1,
     		pageSize:5
     		
     		
     	}
     },
     methods:{
     	
     	getcurrents(){
     		
     		//https://ikapp.health.ikang.com/appService/v2/banner/news/list?currentPage=1&pageSize=5
     		this.$http('/ik/appService/v2/banner/news/list')
     		.then(res=>{
     			this.currents=res.data.results

     		})
     	}
     	
     },
     created:function(){
      this.getcurrents();
     	  
     }
     

  
  
}
</script>

<style lang="scss" scoped>
 .current{
 	width:100%;
 	height:2.7rem;
 	background:#ffffff;
 	margin-top:20px;
	  .currentbox{
	  	  display: flex;
	  	  flex-direction:column;
	  	 .currenttop{
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
	 	.currentbottom{
	 		width:100%;
	 		height:2.2rem;
	 		
	 		display: flex;
	 		overflow: hidden;
	 		.currents{	 			
	 			margin-right:5px;
	 			img{	 				
	 			width:2.17rem;
	 			height:1.22rem;
	 		  }
	 		  span{
	 		  	display: block;
	 		  	margin-top:12px;
	 		  }
	 		  p{
	 		  	font-size: 16px;
	 		  	color:#333333;
	 		  }
	 		}
	 		
	 	}	
	 	
	}  
 	
 }
</style>