<template>
	<div class="shopcart-good-item">
		<div class="shopcart-good-left">
			<check-icon :value.sync="cart.select"></check-icon>
		</div>
		<div class="shopcart-good-right">
			<img :src="cart.pics[0].src">
			<div @click="showCart()"  v-if="!edit" class="shopcart-good-info">
				<p>{{cart.name}}</p>
				<span class="price"> ¥{{parseInt(cart.price).toFixed(2)}} </span>
				<span class="amount">x{{cart.amount}}</span>
			</div>
			<div v-show="edit" class="shopcart-good-edit">
				<div class="amount-edit">
					<x-number fillable  v-model="amount" :min="1" :max="cart.stock"></x-number>
				</div>
				<span class="price"> ¥{{cart.price}} </span>
				<span class="del" @click="showDelConfirm(cart.id)">
					删除
				</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import { Group, XNumber, XSwitch, CellBox, CheckIcon, Checklist, Confirm,TransferDomDirective as TransferDom} from 'vux'
	import store from '@/store'
	export default{
		directives: {
			TransferDom
		},
		components: {
			CellBox,
			Group,
			CheckIcon,
			Checklist,
			Group,
			XSwitch,
			XNumber,
			Confirm
		},
		props:{
			cart: [Object],
			edit: [Boolean]
		},
		data(){
			return{
				amount: this.cart.amount
				
			}
		},
		methods: {
			showDelConfirm(){
				var _id = this.cart.id;
				this.$vux.confirm.show({
					title: '删除确认',
					content:'是否删除此商品',
					  onCancel () {},
					  onConfirm () {
					  	console.log();
					  	store.commit('removeCart', _id)
					  }
					})
			},
			showCart(){
				this.$router.push({name: 'cart', params: {cartId :this.cart.id}})
			}
		},
		watch: {
			amount: {
				handler(val, oldVal){
					this.cart.amount = parseInt(val);
				},
				deep: true
			}
		}
	}
</script>

<style lang="less" scoped>

	.shopcart-good-item img{
		float: left;
		height: 25vw;
	}
	.shopcart-good-item{
		margin-right: -15px;
		width: 100vw;
		height: 25vw;
	}
	.shopcart-good-info{
		position: relative;
		height: 25vw;
	}
	.shopcart-good-info p{
		margin: 0;
		padding: 0 1rem;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.shopcart-good-info .price,.shopcart-good-edit .price{
		color: red;
		padding: 1rem;
		display: inline-block;
		font-size: 14px;
	}
	.shopcart-good-info .amount{
		padding: 1rem;
		color: #888;
		font-size: 1.5rem;
		position: absolute;
		right: 1rem;
		display: inline-block;
	}
	.shopcart-good-edit{
		position: relative;
		height: 25vw;
	}
	.shopcart-good-edit .amount-edit .weui-cell__ft.vux-cell-primary>div{
		float: left !important;
	}
	.shopcart-good-edit .del{
		position: absolute;
		right: 0;
		top: 0;
		width: 5rem;
		height: 25vw;
		line-height: 25vw;
		font-size: 14px;
		color: #FFF;
		text-align: center;
		background-color: #DC2222;
	}
	.shopcart-good-left{
		float: left;
		width: 10%;
		height: 100%;

	}
	.shopcart-good-right{
		float: left;
		width: 90%;
		height: 100%;
	}
	.shopcart-good-right::after{
		content: "";
		display: block;
		height: 0;
		overflow: hidden;
		visibility: hidden;
		clear: both;
	}
	.shopcart-good-left>.vux-check-icon{
		margin-top: 40px;
	}
	.weui-cell{
		width: 8em;
		padding: .5em 0;
	}
</style>