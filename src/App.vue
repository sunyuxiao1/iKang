<template>
  <div id="app">
   
  
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppFooter from './components/commons/Footer/Footer'
export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>
