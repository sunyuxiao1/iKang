<template>
  <div id="app">
  	 <router-view>
					<transition leave-active-class="animated slideOutRight"
						           enter-active-class="animated fadeIn"
						           mode = "out-in" >
						   
					    <router-view ></router-view>
					</transition>
					
			</router-view>
					<app-footer></app-footer>
	
  
  
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
