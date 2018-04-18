<template>
	<footer class="app-footer">
	<div>
	  <dl v-for="(item,index) in className" :key="item.id"  >
	  	  <router-link :to="{name:item.name}" >
			  <dt><i class="iconfont " 
			  	      
			  	  @click = "activeIndex= index"
			      :class = "[(activeIndex === index ? item.classb : item.classa)]"
			    
			  	   ></i></dt>
			  <dd>{{item.title}}</dd>
	  	  </router-link>
	  </dl>
	
	</div>
	</footer>
</template>

<script>
import router from '../../../router'
export default{
  name: 'AppFooter',
  data:function(){
  	  return {
  	  	 activeIndex:-1,
  	  	className:[
  	  	    {id:1,title:'首页',classa:'icon-shouye2',classb:'icon-shouye1 color ',name:'home'},
  	  	     {id:2,title:'分院',classa:'icon-yiyuanzixunkaobei',classb:'icon-yiyuanzixun-tianchong color'},
  	  	      {id:3,title:'热销',classa:'icon-huobao',classb:'icon-huo color',name:'hot'},
  	  	       {id:4,title:'报告',classa:'icon-huanzhebaogao',classb:'icon-huanzhebaogao1 color'},
  	  	        {id:5,title:'我的',classa:'icon-wode',classb:'icon-weibiaoti-_huabanfuben color'}
  	  	]
  	  }
  },
  methods:{
 
  },
  created:function(){
  	this.activeIndex++
  },

  
  }
  

</script>

<style lang="scss" scoped>
.app-footer{
	width:100%;
	height:0.52rem;
	background:#fafafa;
	border-top: 1px solid #f1f1f1 ;
	div{
		display:flex;
		justify-content: space-around;
		
		
		color:#848484;
		dl{
			 text-align: center;
			dd{
				text-align:center;
			    font-size:16px;
			}
			
			i{
				font-size:24px;
				color:#6b6b6b;
			    
				
			}
			.color{
				color:#ea5504;
			}
			
		}
	}
}
</style>
