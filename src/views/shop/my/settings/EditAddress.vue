<template>
<view-box class="view-box">
<x-header :left-options="{backText: '管理收货地址'}">
</x-header>
	<address-list  
	:options="addressList"
	:edit="true" 
	:defaultAddress="defaultAddress" 
	@on-delete="onDelete"
	@on-default-change="onDefaultChange"></address-list>
	<x-button class="add-new-address" link="/address">添加新地址</x-button>
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
					area: '浙江省 杭州市 临安市',
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
		onDelete(id){
			var index = 0;
			for (var address of this.addressList) {
				if (address.id == id) {
					this.addressList.splice(index, 1);
					if (this.defaultAddress == id) {
						this.defaultAddress = this.addressList[0].id;
					}
				}
				index++;
			}
		},
		onDefaultChange(id){
			this.defaultAddress = id;
			this.$vux.loading.show({
			 text: '保存中'
			})
			setTimeout(()=>{this.$vux.loading.hide()}, 100)
			
		}
	}
}
</script>

<style scoped lang="less">
	.add-new-address{
		border-radius: 0;
		color: #FFF;
		background-color: #F9634A;
		position: absolute;
		bottom: 0;
	}
	.add-new-address:active{
		color: #FFF;
		background-color: #F9533A;
	}
</style>