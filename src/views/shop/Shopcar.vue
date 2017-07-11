<template>
<view-box>
	<!-- 购物车顶部操作栏 -->
	<shopcar-top></shopcar-top>
	<!-- 已加入购物车商品 -->
	<cart-list :edit="edit"></cart-list>
	<!-- 购物车底部操作栏 -->
	<shopcar-bottom :edit="edit"></shopcar-bottom>
</view-box>
</template>

<script>
import { mapGetters, mapState} from 'vuex'
import { ViewBox } from 'vux'

export default{
	components: {
		ViewBox,
		ShopcarTop: () => import('@/components/shopcar/ShopcarTop'),
		CartList: () => import('@/components/shopcar/CartList'),
		ShopcarBottom: () => import('@/components/shopcar/ShopcarBottom')
	},
	mounted(){
	},
	data(){
		return{
			edit: false,
		}
	},
	computed:
		mapState({
			selectAll: 'shopcart.selectAll'
		})
	,
}
	
</script>

<style>
	.shopcart-content{
		height: 100%;
		position: relative;
	}
	
</style>