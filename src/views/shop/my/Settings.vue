<template>
<view-box class="view-box">
	<group :gutter="0">
		<cell is-link>
			<b slot="icon">
				<img class="user-head" src="http://img1.touxiang.cn/uploads/20131121/21-074930_455.jpg">
			</b>
			<p class="username" slot="title">某某某</p>
			<p slot="inline-desc">会员名：某某某</p>
		</cell>
		<cell 
		:title="'我的收货地址'"
		link="/editAddress"></cell>
	</group>
	<group :gutter="10">
		<cell 
		:title="'账户与安全'"
		is-link></cell>
	</group>
	<group :gutter="10">
		<cell 
		:title="'关于光远科技'"
		is-link></cell>
	</group>
	<x-button class="logout-btn" type="warn">退出当前账户</x-button>
</view-box>
</template>

<script>
import { ViewBox, Group, Cell, CellBox, XButton } from 'vux'
export default{
	components:{
		Group, 
		Cell, 
		CellBox,
		ViewBox,
		XButton,
		MHeader: ()=> import('@/components/common/MHeader')
	}
}
</script>

<style scoped>
.view-box{
	background-color: #F1F1F1;
}
.user-head{
	height: 60px;
	border-radius: 30px;
	margin-right: 5px;
}
.username{
	font-size: 16px;
	color: #000;
	padding-bottom: 5px;
}
.logout-btn{
	position: absolute;
	bottom: 0;
}
.weui-btn.logout-btn.weui-btn_warn{
	border-radius: 0;
}
</style>