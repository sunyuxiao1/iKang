<template>
	<div class="banner swiper-container">
  	      <div class="swiper-wrapper">
  	          <div class="swiper-slide"
  	          	v-for='banner in banners'
  	          	:key='banner.id'
  	          	>
  	          	 <a :href="banner.eventLink">
  	          	  <img width="100%" :src="banner.picLink" alt="" />
  	          	  </a>
  	          </div>
  	          
  	      </div>
       <div class="swiper-pagination"></div>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import '../../../../node_modules/swiper/dist/css/swiper.min.css'
    import Vue from 'vue'
export default{
  name: 'Banner',
  data(){
  	return {
  		banners:[]
  	}
  },
  mounted(){
  	this.$http.get('/static/json/banner.json',{
  	  	
  }).then(res=>{
  	this.banners=res.data
  	Vue.nextTick(()=>{
  		new Swiper('.banner',{
  			autoplay: {
			    delay: 1000,
			    stopOnLastSlide: false,
			    disableOnInteraction: true,
			   },
  			pagination:{
  				el:'.swiper-pagination',
  				
  			}
  			
  		})
  	})
  });
  	
  }
 
}
</script>

<style lang="scss" scoped>
</style>