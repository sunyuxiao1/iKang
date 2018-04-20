<template>
  <div class="home">
  	 
  	 
	  	 <banner></banner>
	  	 <app-nav></app-nav>
	  	 <nav-list></nav-list>
  	   <current></current>
  	   <home-content></home-content>
  	   <record></record>
	   
  </div>
</template>

<script>

import AppNav from './Nav.vue'
import Banner from './Banner.vue'
import NavList from './NavList'
import Current from './Current'
import HomeContent from './HomeContent'
import Record from './Record'
export default{
  name: 'Home',

  
  components:{
  	Banner,AppNav,NavList,Current,HomeContent,Record
  }
}
</script>

<style lang="scss" scoped>

   .home{
   	
   		overflow:scroll;
   	  flex:1;
   
   }

</style>
