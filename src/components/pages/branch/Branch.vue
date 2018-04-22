<template>
	<div class="branch">
		
	    <branch-header></branch-header>
	    <branch-nav></branch-nav>
	    <branch-list ></branch-list>
	</div>
</template>

<script>
	
	import BranchHeader from './branchHeader'
	import BranchNav from './branchNav'
	import BranchList from './branchList'

	
	
	export default {
		name: 'Branch',
		components: {
		  BranchHeader,
		  BranchNav,
		  BranchList,
	   }
	}
</script>

<style lang="scss">
	.branch{
		position: relative;
	}
</style>