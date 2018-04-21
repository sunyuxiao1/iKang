<template>
   <div class="classify">
       
			   <div class="headerbox">
			   	  <router-link to='/home'>
			   	    <span > < </span>
			   	  </router-link>
			   		<h2>分类</h2>
			   </div>
			   <div class="sectionbox">
			   	 <div class="left">
			   	 	<ul>
			   	 		<li v-for="(classifylist,index) in classifylists"
			   	 			:key="classifylist.id" 
			   	 			@click="addclassname = index"
			   	 			:class="(addclassname == index ? classifylist.addclass :'' )"
			   	 			>{{classifylist.title}}
			   	 			
			   	 		</li>
			   	 	</ul>
			   	 </div>
			
			   	 <div class="right">
			   	 	
				   	 	<div class="rightbox" v-for="classifylist2 in classifylists2">
				   	 		<router-link to="/detailpage">
					   	 		<img :src="classifylist2.tagImage" alt="" />
					   	 		<span>{{classifylist2.tagName}}</span>
				   	 		</router-link>
				   	 	</div>
			   	 </div>
	   	 	
	   	 
	   </div>
       
  </div>
</template>

<script>
	
import DetailPage from "./DetailPage/DetailPage.vue"
export default{
  name: 'Classify',
  components:{
  	DetailPage
  },
   data(){
  	return{
  		classifylists:[
  	     {id:1,title:"体检",addclass:"click-color"},
  	     {id:2,title:"齿科",addclass:"click-color"},
  	     {id:3,title:"基因",addclass:"click-color"},
  	     
  	],
      addclassname:-1,
  	 classifylists2:[]
  		
  	}
  	
 },
 methods:{
 	getClassify(){
 		this.$http.get('http://localhost:8080/ik/appService/v2/main/categoryQuickTag/5/2')
     		.then(res=>{
     			this.classifylists2=res.data.results
                
     		})
 	}
 },
 created(){
 	 this.addclassname++;
 	 this.getClassify();
 }
  
 
}
</script>

<style lang="scss" scoped>
     .classify{
     	
     		width:100%;
	     	height:100%;
     	    background:#ffffff !important;
     	    .headerbox{
     	    display:flex;     	    
     	 	width:100%;
     	 	height:0.37rem;
     	 	background:#fafafa;
     	 	border-bottom:1px solid #eeeeee;
     	 	span{
     	 		margin-left:0.17rem;
     	 		font-size:0.3rem;
     	 		text-align: center;
     	 		color:#9c9fa0;
     	 	}
     	 	h2{
     	 		margin-left:1.12rem;
     	 		line-height:0.37rem ;
     	 	}
     	 }
        .sectionbox{
        	width:100%;
        	height:100%;
        	display: flex;
        	
        	.left{
        		width:20%;
        		background:#f5f5f5;
        		height:100%;
        		ul{
        		 width:100%;
        		 height:6rem;	
        		 background:#f5f5f5;
        		 li{
        		 	width:100%;
        		 	height:0.51rem;
        		 	border-bottom:1px solid #fff;
        		 	text-align: center;
        		 	font-size:0.12rem;
        		 	color:#636363;
        		 	line-height:0.51rem ;
        		  }
        		  .click-color{
        		  	background:#fff;
        		  	border-left:2px solid #ea5504;
        		  	color:#ea5504;
        		  }
        	   }
        	}
        	.right{
        		width:80%;
        		height:6rem;
        		display:flex;
        		flex-wrap: wrap;
        		.rightbox{
        			margin-left:0.6rem;
        			margin-top:0.24rem;
        			img{
        			width:0.61rem;
        			height:0.58rem;
        		   }
        		   span{
        		   	width:0.47rem;
        		   	height:0.14rem;
        		   line-height:0.46rem;
        		   }
        		}
        		
        	}
        }
    }
	     	
     	
     
</style>