<template>
  <div id="app">
   
  <app-header></app-header>
  <div class="clearboth"></div>
 
<transition leave-active-class="animated slideOutRight"
	           enter-active-class="animated fadeIn"
	           mode = "out-in" >
    <router-view ></router-view>
</transition>

	
       <app-footer></app-footer>
	 
  </transition>
  
  </div>
</template>

<script>
	
import AppFooter from './components/commons/Footer/Footer.vue'
import AppHeader from './components/commons/Header/Header.vue'
export default {
  name: 'App',
 components:{
 	AppFooter,AppHeader
 }
}
</script>
