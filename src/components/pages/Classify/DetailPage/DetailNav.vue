<template>
     <div class="detail-nav">
         <div class=" detail-navbox" v-for= "getdetailnav in getdetailnavs">
          	
              <img :src="getdetailnav.tagImage" />
              <span>{{getdetailnav.tagName}}</span>
          </div>
     </div>
</template>

<script>
	export default{
		name:"DetailNav",
		data(){
			return{
				getdetailnavs:[]
			}
		},
		
		methods:{
			getdetailnav(){
				this.$http.get('ik/appService/v2/main/categoryQuickTag/5/1').then(res=>{
					this.getdetailnavs=res.data.results;
				})
			}
		},
		created(){
			this.getdetailnav();
		}
	}
</script>

<style lang="scss" scoped>
     .detail-nav{
     	width:100%;
     	height:1.87rem;
     	background:#ffffff;
     	display:flex;
        justify-content:space-around;
     	flex-wrap: wrap;
       .detail-navbox{
     		width:20%;
     		height:0.71rem;
     		margin-left:0.1rem;
     		margin-top:0.1rem;
     		img{
     			width:0.5rem;
     		    height:0.46rem;
     		}
     	}
     }
</style>