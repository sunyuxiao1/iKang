<template>
    <nav class="app-nav">
		   <dl v-for='item in homenav' :key='item.id'>
		      <dt><img :src="item.src"  /></dt>
		      <dd>{{item.title}}</dd>
		   </dl>
	 </nav>
</template>

<script>
export default{
   name: 'AppNav',
     data:function(){
  	return {
  		homenav:[
  	        {id:1,title:'体检',src:'/static/img/8.png'},
  	        {id:2,title:'齿科',src:'/static/img/9.png'},
  	        {id:3,title:'基因',src:'/static/img/10.png'},
  	        {id:4,title:'挂号',src:'/static/img/11.png'},
  	
  	 ]
  	}
  },
  
}
</script>

<style lang="scss" scoped>
	.app-nav{
	     		display:flex;
	     		height:1.10rem;
	     		width:100%;
	     		background:#ffffff;
	     		justify-content: space-around;
	     		align-items: center;
	     		dl{	     			 
	     			dt{	     				
	     				img{	     					
	     					width:0.54rem;
	     					height:0.54rem;
	     				}
	     			}
	     			dd{
	     				text-align: center;
	     				line-height: 30px;
	     				font-size: 20px;
	     				color: #333333;
	     			}
	     		}
	     	}
</style>