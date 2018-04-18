<template>
  <div id="app">
   
  
 
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
export default {
  name: 'App',
 components:{
 	AppFooter
 }
}
</script>
