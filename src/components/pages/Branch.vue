<template>
	<div class="branch">
		
	    <app-header></app-header>
	    <nav-list></nav-list>
	    <branch-list ></branch-list>
	</div>
</template>

<script>
	
	import AppHeader from './../commons/header/header'
	import NavList from './../commons/header/nav'
	import BranchList from './../commons/header/branchList'

	
	
	export default {
		name: 'Branch',
		components: {
		  AppHeader,
		  NavList,
		  BranchList,
	   }
	}
</script>

<style lang="scss">
	.branch{
		position: relative;
	}
</style>