<template>
  <div class="home">
  	   
  	   <app-header></app-header>
  	   <app-nav></app-nav>
				<banner></banner>
				<nav-list></nav-list>
				<current></current>
				<home-content></home-content> 	
				<record></record>
	   
  </div>
</template>

<script>


import AppHeader from '../../commons/Header/Header.vue'
import AppNav from './Nav.vue'
import Banner from './Banner.vue'
import NavList from './NavList'
import Current from './Current'
import HomeContent from './HomeContent'
import Record from './Record'
export default{
  name: 'Home',
 components:{
  	AppHeader,	Banner,AppNav,NavList,Current,HomeContent,Record
  }
}
</script>

<style lang="scss" scoped>

   .home{
   	
   		
   	  flex:1;
   
   }

</style>
