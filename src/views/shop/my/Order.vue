<template>
	<div class="order">
		<tab ref="tab" v-model="ind" class="fx-t" bar-active-color="#FF9900">
			<tab-item @on-item-click="changeType(1)" active-class="active" >全部</tab-item>
			<tab-item @on-item-click="changeType(1)" active-class="active" >待付款</tab-item>
			<tab-item @on-item-click="changeType(2)" active-class="active" >待发货</tab-item>
			<tab-item @on-item-click="changeType(3)" active-class="active" >待收货</tab-item>
			<tab-item @on-item-click="changeType(4)" active-class="active" >待评价</tab-item>
		</tab>
		<div style="padding: 50px 0;">
			<order-item :type="type" :id="'Y2017070402592555'" :list="list">
			</order-item>
		</div>
	</div>
</template>

<script>
	import { ViewBox, Tab, TabItem, Panel, Group } from 'vux'

	export default{
		components: { 
			ViewBox,
			Tab,
			TabItem,
			Panel, 
			Group,
			OrderItem: ()=> import('@/components/my/order/OrderItem.vue'),
			MHeader: ()=> import('@/components/common/MHeader')
		},
		methods:{
			changeType(type){
				this.type = type;
			}
		},
		data () {
			return {
				ind: -1,
				type: 1,
				list: [
					{
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
					},
				]
			}
		},
		created(){
			var ind = this.$route.params.ind;
			if (ind != null){
				this.ind = ind + 1;
				this.type = ind + 1;
			} else {
				this.ind = 0;
			}
		}

	}
	
</script>

<style scoped>
.active{
	color: #FF9900 !important;
}
.order{
	background-color: #F1F1F1;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
}
.vux-tab{
	position: absolute;
	top: 0;
	width: 100vw;
	z-index: 1;
}
</style>