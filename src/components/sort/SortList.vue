<template>
	<aside class="sort-sidebar">
		<ul class="nav">
			<template v-for="(sort, index) of sortList">
				<li 
				v-if="index==0" 
				:class="{active: ind === index}" 
				@click="setActive(index)">
					<a>{{sort}}</a>
				</li>
				<li 
				v-else 
				:class="{active: ind === index}" 
				@click="setActive(index)">
					<a>{{sort}}</a>
				</li>
			</template>
		</ul>
	</aside>
</template>

<script>
	export default{
		components : {},
		data() {
			return {
				sortList: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
				ind: '0'
			}
		},
		methods: {
			setActive(index){
				this.ind = index;
			}
		},
		mounted(){
			this.setActive(0)
		}
	}
</script>

<style>
	.sort-sidebar{
		float: left;
		height: 100%;
		width: 25vw;
		overflow-y: auto;
		overflow-x: hidden;
		background-color: #F1F1F1;
	}
	.sort-sidebar .nav a{
		color: #5F5F5F;
		font-size: 14px;
		position: relative;
		display: block;
		padding: 10px 15px;
	}
	.sort-sidebar .nav{
	}
	.sort-sidebar .nav li{
		width: 25vw;
		box-sizing: border-box;
		border-bottom: 1px solid #E5E5E5;
	}
	.sort-sidebar .nav li.active a{
		background-color: #FFF;
		border-left: 4px solid #3366CC;
	}
	/*  浮动分类  */
	.sort-sidebar .nav li.activeClone a{
		background-color: #FFF;
		border-left: 4px solid #3366CC;
	}
</style>