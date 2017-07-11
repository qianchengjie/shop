<template>
<div class="shopcart-bottom">
	<div class="shopcart-bottom-content">
		<div class="shopcart-select-all">
			<check-icon :value.sync="select"></check-icon>
		</div>
		<p class="text">全选</p>
		<span v-if="allPrice != 0.00 && !edit" class="all-price">合计：
		<span v-if="allPrice != 0.00 && !edit" class="price">¥{{allPrice}}</span></span>
		<div class="buy">结算({{allAmount}})</div>
	</div>
</div>
</template>

<script>
import { CellBox, Group, CheckIcon } from 'vux'
import store from '@/store'
import { mapGetters } from 'vuex'

export default{
	components:{
		CellBox, 
		Group, 
		CheckIcon 
	},
	data(){
		return{
			select : false,
			allPrice : 0.00,
			allAmount : 0
		}
	},
	props: {
		edit: [Boolean]
	},
	computed: mapGetters({
		selectAll: 'selectAll',
		cartList: 'cartList'
	}),
	mounted(){
		this.select = this.selectAll;
		var allPrice = 0, allAmount = 0;
				for (var cart of this.cartList) {
					if (cart.select) {
						allPrice += cart.amount*cart.price;
						allAmount++;
					}
				}
				this.allAmount = allAmount;
				this.allPrice = allPrice.toFixed(2);
	},
	watch: {
		select(val, oldVal){
			store.commit('updateSelectAll', val)
		},
		selectAll(val, oldVal){
			this.select = val;
		},
		cartList : {
			handler: function (val, oldVal) {
				var allPrice = 0, allAmount = 0;
				for (var cart of val) {
					if (cart.select) {
						allPrice += cart.amount*cart.price;
						allAmount++;
					}
				}
				this.allAmount = allAmount;
				this.allPrice = allPrice.toFixed(2);
			},
			deep: true
		}
	},
}
</script>

<style>
.shopcart-bottom{
	position: absolute;
	bottom: 50px;
	height: 50px;
	background-color: #FFF;
	border-top: 1px solid #E1E1E1;
	width: 100vw;
	z-index: 1;
}
.shopcart-bottom-content{
	position: relative;
}
.shopcart-bottom .text{
	position: absolute;
	line-height: 50px;
	margin-left: 40px;
	font-size: 16px;
}
.shopcart-bottom .all-price{
	font-size: 1.2rem;
	line-height: 50px;
	display: inline-block;
	position: absolute;
	left: 100px;
}
.all-price .price{
	color: red;
}
.shopcart-bottom  .buy{
	background-color: #FFA800;
	position: absolute;
	right: 0;
	width: 6em;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #FFF;
	font-size: 16px;
}
.shopcart-select-all{
	position: absolute;
	padding: 14px 8px 5px 4px;
}
</style>