<template>
	 <div class="nav-list topmargin">
	 	   <div class="listtop">
	    	    <div class="listcontent" v-for="listitem in listitems" :key="listitem.id">
	    	  
	    	   	  <div>
	    	   	  	<h4>{{listitem.title}}</h4>
	    	   	  	<p>{{listitem.content}}</p>
	    	   	  	
	    	   	  </div>
	    	   	  <span>
	    	   	  	 <img :src="listitem.src" alt="" />
	    	   	  </span>
	    	   	 
	    	   </div>
	    	  
	    	</div>
	    	<div class="topmargin listbottom " >
	    		<div v-for="listimg in listimgs">
	    		<img  :src="listimg.tagImage" alt=""  />
	    		</div>
	    		
	    	</div>
	   </div>
</template>

<script>
export default{
     name: 'NavList',
     data(){
     	return {
     		listitems:[],
     		listimgs:[],
     	}
     },
     methods:{
     	getlistitem(){
     		this.$http('/static/json/navlist.json').then(res=>{
     			 this.listitems=res.data;
     			 
     		})
     	},
     	getimg(){
     		//https://ikapp.health.ikang.com
     		this.$http('http://localhost:8080/ik/appService/v2/main/quickTag')
     		.then(res=>{
     			this.listimgs=res.data.results

     		})
     	}
     	
     },
     created:function(){
     
     	  this.getlistitem();
     	  this.getimg()
     }
     

  
  
}
</script>

<style lang="scss" scoped>
        .nav-list{
        	     display:flex;
		         width:100%;
		         height:2.85rem;
		         flex-wrap: wrap;
        	
            .listtop{
        	
		        	display:flex;
		            width:100%;
		            height:1.64rem;
		            flex-wrap: wrap;
		            justify-content: space-around;
           
           
             .listcontent{
	            	width:48%;
	            	height:0.8rem;
	            	background:#FFFFFF;
	            	display: flex;
	            	justify-content: space-around;
	            	align-items:center;
            	   img{
            		width:0.54rem;
            		height:0.54rem;
            		
            	 }
	            	div{
	            		
	            		 padding-left:5px;
	            		 h4{
		            		font-size: 16px;
		            		color:#000000;
		            		line-height: 18px;
	            	     }
	            	
	            	}
            	
            	
                }
              
            }
            .listbottom{
            	width:100%;
            	height:1.4rem;
            	display:flex;
		        justify-content: space-around;
		       
		        div{
		        	width:1.2rem;
		        	height:1.2rem;
		        	img{
		        		width:100%;
		        		height:100%;
		        	}
		        }	
		        
            }
        }
</style>