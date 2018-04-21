<template>
  <div id="app">
    <!--<branch></branch>-->
    <login-page></login-page>
  </div>
</template>

<script>
	
//	import Branch from './components/pages/Branch'
	import LoginPage from './components/pages/login/Login'
	
	
	
export default {
    name: 'App',
    components: {
//  	Branch,
			LoginPage,
    }
}
</script>

<style lang="scss">
	
</style>
