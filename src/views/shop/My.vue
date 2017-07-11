<template>
	<view-box class="my-content">
		<card>
			<div slot="header" class="my-header-warpper">
				<icon class="my-settings" name="settings" scale="3" @click.native="goSetting"></icon>
				<div class="my-head-warpper">
					<img src="http://img1.touxiang.cn/uploads/20131121/21-074930_455.jpg">
					<span>{{user.name}}</span>
				</div>
			</div>
			<div slot="content" class="card-demo-flex card-demo-content01">
				<div class="vux-1px-l vux-1px-r">
					<span>1130</span>
					<br/>积分
				</div>
				<div class="vux-1px-r">
					<span>15</span>
					<br/>优惠券
				</div>
				<div class="vux-1px-r">
					<span>0</span>
					<br/>收藏
				</div>
			</div>
		</card>
		<group>
			<cell title="我的订单" value="查看所有订单" link="order">
			</cell>
			<grid :rows="5">
				<grid-item :label="'待付款'"
					@click.native="goOrder(0)">
					<el-badge slot="icon" :value="orderBadge[0]">
						<icon name="send" scale="3" ></icon>
					</el-badge>
				</grid-item>
				<grid-item :label="'待发货'"
					@click.native="goOrder(1)">
					<el-badge  slot="icon" :value="orderBadge[1]">
						<icon name="send" scale="3" />
					</el-badge>
				</grid-item>
				<grid-item :label="'待收货'"
					@click.native="goOrder(2)">
					<el-badge  slot="icon" :value="orderBadge[2]">
						<icon name="deliver" scale="3" />
					</el-badge>
				</grid-item>
				<grid-item :label="'待评价'"
					@click.native="goOrder(3)">
					<el-badge  slot="icon" :value="orderBadge[3]">
						<icon name="evaluate" scale="3" />
					</el-badge>
				</grid-item>
				<grid-item  :label="'退款/售后'">
					<el-badge  slot="icon" :value="orderBadge[4]">
						<icon name="refund" scale="3" />
					</el-badge>
				</grid-item>
			</grid>
		</group>
	</view-box>
</template>

<script>
	import { Card, ViewBox, Group, Cell, CellBox, Grid, GridItem } from 'vux'
	export default{
		components: {
			Card,
			ViewBox,
			Group,
			CellBox,
			Cell,
			Grid,
			GridItem
		},
		data(){
			return{
				user: {
					name: '某某某'
				},
				orderBadge: [0,1,2,0,2]
			}
		},
		methods: {
			goSetting(){
				this.$router.push({name: 'settings'})
			},
			goOrder(ind){
				this.$router.push({name: 'order', params: {ind: ind}})
			}
		}
	}
</script>

<style scoped>
	.grid-center {
		display: block;
		text-align: center;
		color: #666;
	}
	.weui-grid{
		padding: 20px 5px;
	}
	.my-content{
		background-color: #F1F1F1;
	}
	.my-head-warpper{
		width: 100%;
		background-color: #374760;
		padding: 20px 0;
	}
	.weui-panel.weui-panel_access::before{
		border-top: none;
	}
	.my-head-warpper img{
		display: block;
		margin: 0 auto;
		margin-bottom: 10px;
		height: 80px;
		width: 80px;
		border-radius: 40px;
		box-sizing: border-box;
		border: 3px solid #FFF;
	}
	.my-head-warpper span{
		display: inline-block;
		width: 100%;
		text-align: center;
		color: #FFF;
		font-size: 14px;
	}
	.my-settings{
		position: absolute;
		right: 10px;
		top: 10px;
	}
	.card-demo-flex {
		display: flex;
	}
	.card-demo-content01 {
		padding: 10px 0;
	}
	.card-padding {
		padding: 15px;
	}
	.card-demo-flex > div {
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	.card-demo-flex span {
		color: #f74c31;
	}
	.weui-grid:before{
		border-right: none;
	}
</style>