<template>
	<div class="modify-address">
		<x-header :left-options="{backText: '修改地址信息'}"><a slot="right">保存</a>
		</x-header>
		<group :gutter="0">
			<x-input 
			:title="'收货人'" 
			v-model="name"></x-input>
			<x-input 
			:title="'联系电话'" 
      :type="'number'"
      :max="11"
			v-model="phone"></x-input>
      <cell
      :title="'所在地区'"
      @click.native="showSelectAddress"
      is-link>
        {{address}}
      </cell>
			<x-textarea 
			v-model="detailed" 
			:placeholder="'详细地址'"></x-textarea>
		</group>
    <select-address 
    :show="show"
    @on-show-change='onShowChange' 
    @on-address-change='onAddressChange' 
    ></select-address>
	</div>
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
    SelectAddress: ()=>import('@/components/my/settings/SelectAddress')
	},
	data(){
		return{
      name: '',
      phone: '',
      detailed: '',
      show: false,
      address: ''
		}
	},
  methods: {
    onShowChange(val){
      this.show = val;
    },
    onAddressChange(val){
      this.address = val;
    },
    showSelectAddress(){
      this.show = true;
    }
  }
}
</script>

<style scoped>
.modify-address{
  height: 100vw;
  width: 100vw;
  position: fixed;
}
</style>