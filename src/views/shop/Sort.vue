<template>
	<div class="sort-content">
		<searchBar ref="searchBar"></searchBar>
		<div ref="sortBody" class="sort-body">
			<sortList></sortList>
			<cartList></cartList>
		</div>
	</div>
</template>

<script>
import { ViewBox } from 'vux'
export default{
	components : {
		cartList: () => import('@/components/sort/cartList'),
		sortList: () => import('@/components/sort/sortList'),
		searchBar: () => import('@/components/sort/searchBar'),
		ViewBox
	},
	mounted(){
		this.$refs.sortBody.style.height = (document.body.clientHeight-101)+'px';
	},
	data(){
		return{
		}
	}
}
</script>

<style scoped>
.sort-content{
	height: 100vh;
}
.sort-body{
	padding-top: 48px;
	padding-bottom: 53px;
	height: 100%;
}
</style>