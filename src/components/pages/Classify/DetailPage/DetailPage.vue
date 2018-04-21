<template>
     <div class="detail-page">
     	<detail-header></detail-header>
        <detail-nav></detail-nav>
        <detail-content></detail-content>
     </div>
</template>
 
<script>
	import DetailHeader from "./DetailHeader.vue"
	import DetailNav from "./DetailNav.vue"
	import DetailContent from "./DetailContent.vue"
	export default{
		name:'DetailPage',
		components:{
			DetailHeader,DetailContent,DetailNav 
		}
		
	}
</script>

<style>
</style>