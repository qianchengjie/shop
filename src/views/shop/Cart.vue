<template>
	<view-box class="view-box">
		<icon class="back-icon" @click.native="back" name="back" scale="1"></icon>
		<cart-swiper :list="cart.pics"></cart-swiper>
		<cart-info :cart="cart"></cart-info>
		<group>
			<cell :title="'选择' + cart.sort" is-link link="" @click.native="showSort"></cell>
			<!--<cell :border-intent="false" :title="'产品参数'" is-link></cell>-->
		</group>
		<div v-transfer-dom>
			<popup class="sort-popup" v-model="popupShow" height="400px">
				<icon @click.native="closePopup" class="close-popup" name="round_close" scale="3"></icon>
				<cart-popup-content :cart="cart" v-model="popupShow"></cart-popup-content>
			</popup>
		</div>
		<cart-bottom :cart="cart"></cart-bottom>
	</view-box>
</template>

<script>
	import { TransferDom, Group, Cell, Popup, ViewBox  } from 'vux'

	export default{
		directives: {
			TransferDom
		},
		components: {
			CartSwiper: () => import('@/components/cart/CartSwiper'),
			CartInfo: () => import('@/components/cart/CartInfo'),
			CartPopupContent: () => import('@/components/cart/CartPopupContent'),
			CartBottom: () => import('@/components/cart/CartBottom'),
			TransferDom, 
			Group, 
			Cell, 
			Popup, 
			ViewBox
		},
		methods: {
			showSort(){
				this.popupShow = true;
			},
			back(){
				this.$router.go(-1);
			},
			closePopup(){
				this.popupShow = false;
			}
		},
		data () {
			return {
				popupShow: false,
				cart: {
					id: 1,
					name: '原拆有测 For 6代手机 尾插排线 充电数据耳机送话器排线 白色',
					price: 19.50,
					amount: 2,
					stock: 10,
					select: false,
					deli: 0.00,
					cell: 3,
					stock: 10,
					sort: ['颜色','型号'],
					sortType: [['红色','黑色','白色'], ['CTXC1', 'CTXC2', 'CTXC3']],
					pics: [
					{
						src: 'https://cbu01.alicdn.com/img/ibank/2016/964/370/2964073469_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
					},
					{
						src: 'https://cbu01.alicdn.com/img/ibank/2015/512/396/2458693215_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
					},
					{
						src: 'https://cbu01.alicdn.com/img/ibank/2015/632/408/2462804236_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
					},
					]
				}
			}
		}
	}
</script>

<style scoped>
.view-box{
	background-color: #F1F1F1;
}
.back-icon{
	background-color: rgba(0,0,0,.5);
	position: fixed;
	top: 10px;
	left: 10px;
	height: 15px;
	width: 15px;
	padding: 10px;
	border-radius: 20px;
	z-index: 10;
}
.close-popup{
	position: absolute;
	right: 10px;
	top: 10px;
	z-index: 10;
}
</style>