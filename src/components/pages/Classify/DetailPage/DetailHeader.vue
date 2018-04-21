<template>
    <div class="detail-header">
          <ul class="headerbox">
          <li 	
          	v-for="(detailnav,index) in detailnavs" :key="detailnav.id"
          	@click="detailnavsindex=index" 
          	:class="(detailnavsindex === index ? detailnav.classname :'')"
          >{{detailnav.title}}</li>
          </ul>
    </div>
</template>

<script>
	export default{
		name:"DetailHeader",
		data(){
			return {
				detailnavs:[
					{id:1,title:"体检",classname:'detainav-color'},
					{id:2,title:"齿科",classname:'detainav-color'},
					{id:3,title:"基因",classname:'detainav-color'},
					{id:4,title:"疫苗",classname:'detainav-color'},
				],
				detailnavsindex:-1
			}
		},
		
		created(){
			this.detailnavsindex++;
			
		}
	}
</script>

<style lang="scss" scoped>
	   .detail-header{
	   	width:100%;
	   	height:0.37rem;
	   	background:#fff;
	   	border:1px solid #e2e2e2;
	   	
	   	    .headerbox{
	   	     	width:100%;
	            height:0.37rem;
	   	     	display:flex;
	   	     	justify-content: space-around;
	   	     	align-items: center;
	   	     	li{
	   	     		width:0.4rem;
	   	     		height:0.37rem;
	   	     		line-height:0.37rem ;
	   	     		text-align: center;
	   	     	}
	   	     	.detainav-color{
	   	     		color:#ec6921;
	   	     		border-bottom:1px solid #ec6921;
	   	     	}
	   	     }
	   }
</style>