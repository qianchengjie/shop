<template>
<group :gutter="0">
	<cell-box>
		<div slot="default">
			<div class="cart-name">{{cart.name}}</div>
			<div class="cart-price">￥{{parseFloat(cart.price).toFixed(2)}}</div>
			<div class="cart-info-bottom">
				<span>快递: {{parseFloat(cart.deli).toFixed(2)}}</span>
				<span>月销量：{{cart.cell}}</span>
				<span>库存：{{cart.stock}}</span>
			</div>
		</div>
	</cell-box>
</group>
</template>

<script>
	import { Group, CellBox } from 'vux'

	export default{
		components: {
			Group,
			CellBox
		},
		props: {
			cart: [Object]
		}
	}
</script>

<style scoped lang="less">
.cart-name{
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.cart-price{
	margin-top: 5px;
	color: red;
	font-size: 16px;
}
.cart-info-bottom{
	margin-top: 10px;
	color: #888;
	font-size: 12px;
	span{
		display: inline-block;
		width: 32%;
	}
	span:nth-child(1){
		text-align: left;
	}
	span:nth-child(2){
		text-align: center;
	}
	span:nth-child(3){
		text-align: right;
	}
}
</style>