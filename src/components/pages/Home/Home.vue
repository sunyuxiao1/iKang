<template>
  <div class="home">
  	 <app-header></app-header>
  	 <banner></banner>
    hom
    
  </div>
</template>

<script>
import AppHeader from '../../../components/commons/Header/Header.vue'

import Banner from './Banner'
export default{
  name: 'Home',
  components:{
  	AppHeader,Banner
  }
}
</script>

<style>
</style>
