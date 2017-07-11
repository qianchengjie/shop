<template>
<div class="cart-bottom">
	<el-row>
		<el-col @click.native="setFavor" v-if="favor" :span="4">
			<icon  name="favor" scale="2.5" />
			<label>收藏</label>
		</el-col>
		<el-col @click.native="setFavor" v-else :span="4">
			<icon name="favor_fill" scale="2.5" />
			<label>已收藏</label>
		</el-col>
		<el-col @click.native="goShopcar" :span="4">
			<icon name="cart" scale="2.5"/>
			<label>购物车</label>
		</el-col>
		<el-col @click.native="addToCart" :span="8">
			<div class="add-to-shopcar-btn">加入购物车</div>
		</el-col>
		<el-col :span="8">
			<div class="buy-now-btn">立即购买</div>
		</el-col>
	</el-row>
</div>
</template>

<script>
	import { mapMutations  } from 'vuex'

	export default{
		components: {
		},
		methods: {
			...mapMutations([
				'addCart'
				]),
			addToCart(){
				this.$vux.toast.show({
					 text: '已加入购物车',
					 width: '11em'
				})
				this.addCart(this.cart.id)
			},
			goShopcar(){
				this.$router.push({name:'shopcar'})
			},
			setFavor(){
				if (this.favor) {
					this.favor = false;
				} else {
					this.favor = true;
				}
			}
		},
		data () {
			return {
				favor: false
			}
		},
		props: {
			cart: [Object]
		}
	}
</script>

<style scoped lang="less">
	@bgc: #F1F1F1;
	@buybc: #FF6537;
	@addbc: #E9A34A;
	@bdc: #F1F1F1;
	
	.buy-now-btn,.add-to-shopcar-btn{
		text-align: center;
		line-height: 50px;
		color: #FFF;
		font-size: 14px;
	}
	.buy-now-btn{
		background-color: @buybc;
	}
	.add-to-shopcar-btn{
		background-color: @addbc;
	}
	.cart-bottom{
		position: absolute;
		border-top: 1px solid @bdc;
		box-sizing: border-box;
		width: 100vw;
		height: 50px;
		bottom: 0;
		text-align: center;
		background-color: #FFF;
		div{
			height: 50px;
			div:nth-child(1)+div{
				border-left: 1px solid @bdc;
			}
		}
		svg{
			padding-top: 4px;
		}
		label{
			display: block;
			margin-top: -6px;
			color: #888;
		}
	}
</style>