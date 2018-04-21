<template>
  <div class="home">
  	   
  	   <app-header></app-header>
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
import AppHeader from '../../commons/Header/Header.vue'
export default{
  name: 'Home',

  
  components:{
  	Banner,AppNav,NavList,Current,HomeContent,Record,AppHeader
  }
}
</script>

<style lang="scss" scoped>

   .home{
   	
   		overflow:scroll;
   	  flex:1;
   
   }

</style>
