<template>
	<group class="no-title cartlist">
		<cell-box ref="cartList" v-for="cart in cartList" :key="cart.id">
			<cart :edit="edit"  :cart="cart"></cart>
		</cell-box>
	</group>
</template>



<script>
	import { Group, CellBox, ViewBox } from 'vux'
	import _ from 'lodash'
	import store from '@/store'
	import { mapGetters, mapState} from 'vuex'

	export default{
		components: {
			cart: ()=> import('./cart'),
			Group, 
			CellBox,
			ViewBox
		},
		data(){
			return{
				shopname: '光远科技',
				selectAll: false
			}
		},
		props: {
			edit: [Boolean]
		},
		computed: mapGetters({
			cartList: 'cartList'
		}),
		watch: {
			cartList: {
				handler: function (val, oldVal) {
					var flag = true;
					for (var cart of val) {
						if (!cart.select) {
							flag = false;
						}
					}
					if ( val.length != 0 ) {
						store.commit('updateSelectAll', flag)
					} else {
						store.commit('updateSelectAll', false)
					}
				},
				deep: true
			}
		}
	}
</script>

<style scoped>
	.vux-cell-box.weui-cell{
		padding-left: 0;
	}
	.cartlist{
		padding-top: 40px;
		padding-bottom: 104px;
	}
</style>