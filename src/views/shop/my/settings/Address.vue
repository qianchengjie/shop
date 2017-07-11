<template>
	<view-box class="view-box">
		<x-header :left-options="{backText: '添加新地址'}">
    <a slot="right">保存</a>
		</x-header>
		<group :gutter="0">
			<x-input 
			:title="'收货人 '" 
			v-model="address.name"></x-input>
			<x-input 
			:title="'联系电话'" 
      :type="'number'"
      :max="11"
			v-model="address.phone"></x-input>
      <cell
      :title="'所在地区'"
      @click.native="showSelectArea"
      is-link>
        {{address.area}}
      </cell>
			<x-textarea 
			v-model="address.detailed" 
			:placeholder="'详细地址'"></x-textarea>
		</group>
    <select-address-box 
    :show="show"
    @on-show-change='onShowChange' 
    @on-area-change='onAreaChange' 
    ></select-address-box>


	</view-box>
</template>

<script>
import { ViewBox, XHeader, XTextarea, XInput, Group, XButton, Cell, PopupPicker, Picker } from 'vux'

export default {
	components: {
		ViewBox,
		XHeader,
		XTextarea,
		XInput,
		XButton,
		Group,
		Cell,
    SelectAddressBox: ()=>import('@/components/my/settings/SelectAddressBox')
	},
	data(){
		return{
      address: {
        id: 0,
        name: '',
        phone: '',
        area: '',
        detailed: ''
      },
      show: false,
      modify: false
		}
	},
  methods: {
    onShowChange(val){
      this.show = val;
    },
    onAreaChange(val){
      this.address.area = val;
    },
    showSelectArea(){
      this.show = true;
    }
  },
  mounted(){
    var address = this.$route.params.address;
    if( address != undefined) {
      this.address.modify = true;
      this.address = address;
    }
  }
}
</script>

<style scoped>

</style>