<template>
<view-box class="view-box">
<x-header :left-options="{backText: ''}">选择收货地址<a slot="right" @click="changeEdit">{{edit?'完成':'管理'}}</a>
</x-header>
	<address-list  
	:value="value" 
	:options="addressList"
	:edit="edit" 
	:defaultAddress="defaultAddress" @on-radio-change="onRadioChange" 
	@on-delete="onDelete"
	@on-default-change="onDefaultChange"></address-list>
	<x-button v-if="edit" class="add-new-address">添加新地址</x-button>
	{{value}}
	{{edit}}
	{{defaultAddress}}
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
			edit: false,
			value: 1,
			defaultAddress: 1,
			addressList: [
				{
					id: 1,
					name: '某某某',
					phone: '182××××7086',
					content: '浙江省杭州市临安市青山湖街道胜联路168号'
				},
				{
					id: 2,
					name: '某',
					phone: '186××××1236',
					content: '浙江省杭州市临安市青山湖街道胜联路1123号'
				},
				{
					id: 3,
					name: '某a',
					phone: '186××××1246',
					content: '浙江省杭州市临安市青山湖街道胜联路1123号'
				},
			]
		}
	},
	methods: {
		onRadioChange(val){
			this.value = val;
		},
		onDelete(id){
			var index = 0;
			for (var address of this.addressList) {
				if (address.id == id) {
					this.addressList.splice(index, 1);
					if (this.value == id) {
						this.value = this.addressList[0].id;
						this.defaultAddress = this.addressList[0].id;
					}
				}
				index++;
			}
		},
		onDefaultChange(id){
			this.defaultAddress = id;
		},
		changeEdit(){
			this.edit = !this.edit;
		}
	}
}
</script>

<style scoped lang="less">
	.view-box{
		background-color: #F1F1F1;
	}
	.add-new-address{
		border-radius: 0;
		color: #FFF;
		background-color: #F9634A;
		position: absolute;
		bottom: 0;
	}
</style>