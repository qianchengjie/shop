<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__hd">
		 <span class="order-id">订单号：{{id}}</span>
		 <span class="order-status">{{status[type-1]}}</span>
		</div> 
		<div class="weui-panel__bd">
			<a v-for="cart in list" :key="cart.id"  class="weui-media-box weui-media-box_appmsg" @click="showCart(cart.id)">
				<div class="weui-media-box__hd">
					<img :src="cart.pics[0].src" alt="" class="weui-media-box__thumb">
				</div> 
				<div class="weui-media-box__bd">
					<p class="cart-name">
						{{cart.name}}
					</p>
					<div class="cart-info">
						<span class="price">￥{{parseInt(cart.price).toFixed(2)}}</span>
						<span class="amount">x{{cart.amount}}</span>
					</div>
				</div>
			</a>
		</div> 
		<div class="weui-panel__ft bd-t-1p">
			<span>总{{allAmount}}件商品,</span>
			<span>小计:</span>
			<span class="price">￥19.50</span>
		</div>
		<div class="bd-t-1p order-btn-group">
		      <x-button v-if="type == 5" mini plain>删除订单</x-button>
		      <x-button v-if="type == 1" mini plain type="primary">去付款</x-button>
		      <x-button v-if="type == 1" mini plain>取消订单</x-button>
		      <x-button v-if="type == 4" mini plain class="org-btn">评价</x-button>
		      <x-button @click.native="goExpressTrace" v-if="type == 2  || type == 3" mini plain>查看物流</x-button>
		      <x-button v-if="type == 3" mini plain class="org-btn">确认收货</x-button>
		</div>
	</div>
</template>

<script>
import { XButton, ViewBox } from 'vux'
export default{
	components: {
		XButton,
		ViewBox
	},
	props:{
		id: [String],
		list: [Array],
		type: [Number]
	},
	data(){
		return{
			allAmount: 1,
			status: ['等待付款','买家已付款','卖家已发货','交易成功']
		}
	},
	methods: {
		showCart(id){
			this.$router.push({name: 'cart', params: {cartId: id}})
		},
		goExpressTrace(){
			this.$router.push({name: 'express'})
		}
	}
}
</script>

<style scoped>
.order-id{
	color: #000;
}
.order-status{
	color: red;
	position: absolute;
	right: 15px;
}
.weui-panel__hd::after{
	left: 0;
}
.weui-media-box.weui-media-box_appmsg{
	height: 100px !important;
}
.weui-media-box__hd{
	height: 100px !important;
	width: 100px;
}
.weui-media-box__bd{
	height: 100px !important;
}
.weui-media-box__bd p{
	font-size: 14px;
}
.weui-media-box__thumb{
	width: 100px;
	height: 100px !important;
}
.weui-panel__ft{
	padding: 10px 15px 10px 0;
	font-size: 15px;
	color: #5f5d5d;
}
.cart-name{
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.cart-info{
	margin-top: 20px;
}
.price{
	color: red;
	font-size: 14px;
}
.amount{
	position: absolute;
	right: 15px;
	font-size: 16px;
	color: #888;
}
.weui-panel__ft{
	text-align: right;
}
.order-btn-group{
	padding: 10px 15px 10px 0;
	text-align: right;
}
.order-btn-group button{
	text-align: center;
	height: 25px;
	line-height: 25px;
	font-size: 12px;
	margin-top: 0;
	padding: 0 10px;
}
.bd-t-1p{
	position: relative;
}
.bd-t-1p::before{
	border-top: 1px solid #E5E5E5;
	content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    color: #E5E5E5;    
    transform: scaleY(0.5);
}
.org-btn{
	color: #F72;
	border:1px solid #F72;
}
</style>