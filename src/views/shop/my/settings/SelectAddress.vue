<template>
<view-box class="view-box">
<x-header :left-options="{backText: '选择收货地址'}"><router-link to="/editAddress" slot="right">管理</router-link></x-header>
	<address-list  
	:value="value" 
	:options="addressList"
	:edit="false" 
	:defaultAddress="defaultAddress" 
	@on-radio-change="onRadioChange"></address-list>
</view-box>
</template>

<script>
import { XButton, ViewBox, XHeader } from 'vux'

export default{
	components: {
		AddressList: ()=>import('@/components/my/settings/AddressList'),
		XButton,
		ViewBox,
		XHeader
	},
	data(){
		return{
			value: 1,
			defaultAddress: 1,
			addressList: [
				{
					id: 1,
					name: '某某某',
					phone: '18234127086',
					area: '浙江省 杭州市 临安市',
					detailed: '青山湖街道胜联路168号'
				},
				{
					id: 2,
					name: '某',
					phone: '18623211236',
					area: '浙江省杭州市临安市',
					detailed: '青山湖街道胜联路1123号'
				},
				{
					id: 3,
					name: '某a',
					phone: '18645151246',
					area: '浙江省 杭州市 临安市',
					detailed: '青山湖街道胜联路1123号'
				},
			]
		}
	},
	methods: {
		onRadioChange(val){
			this.value = val;
		}
	}
}
</script>

<style scoped>
	.add-new-address{
		border-radius: 0;
		color: #FFF;
		background-color: #F9634A;
		position: absolute;
		bottom: 0;
	}
</style>