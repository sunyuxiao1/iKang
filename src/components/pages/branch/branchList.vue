<template>
	<div class="branch-list branchpage">
		<div v-for="(val,goods) in userinform"  class="list-wrap">
			<div class="left-img">
				<img :src="val.src"/>
			</div>
			<div class="right-description">
				<h3>{{val.title}}</h3>
				<p>{{val.time}}</p>
				<p>{{val.add}}</p>
				<p class="bot">
					<span>体检</span>
					<span v-if = "isShow">齿科</span>
				</p>
				<span>{{val.distance}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import data from '../../../data.json'
	
	export default{
		name : 'BrachList',
  　　　　data(){
  　　　　　　return{
	 　　　　　　　　userinform: '',
	 			isShow : false
	  　　　　　　}
	  　　　　},
	   methods:{
	   		getInfo (val){
		  		this.userinform = data.list
		  		console.log(typeof this.userinform)
	   		}
	 　　},
		created (){
			this.getInfo()
		},
		watch : {
			userinform : function(val){
				for (var it in this.userinform) {
					if(this.userinform[it].show == "true"){
						this.isShow = true
					}else{
						this.isShow = false
					} 
				}
			}
		}
	}
</script>

<style lang="scss">
	
	.branch-list{
		/*position: absolute;
		top: 90px;*/
		padding-left:20px ;
		.list-wrap{
			display: flex;
			height: 146px;
			box-sizing: border-box;
			padding:21px 0;
			border-bottom:1px solid #e3e3e3;
			.left-img{
				width: 105px;
				height: 0.8rem;
				img{
					width: 105px;
					height: 0.8rem;
				}
			}
			.right-description{
				padding-left:19px ;
				width: 211px;
				position: relative;
				
				h3{
					color: #333;
					font-size: 16px;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    overflow: hidden;
				    position: relative;
				}
				p{
					font-size: 12px;
					color: gray;
					margin: 8px 0;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;

					
				}
				> span{
					position: absolute;
					bottom: 0;
					right: 0;
					font-size: 12px;
				}
				.bot{
					padding-top:7px ;
					span{
						display: inline-block;
						font-size: 11px;
						color: #589daf;
						border: 1px solid #589daf;
						padding:0 2px;
						margin-right: 6px;
						border-radius: 2px;
					}
				}
			}
		}
	}
	
</style>