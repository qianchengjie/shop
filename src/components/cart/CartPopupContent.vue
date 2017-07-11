<template>
<div class="sort-popup-content">
	<div class="popup-top">
		<img class="cart-pic" :src="cart.pics[0].src">
		<div class="select-info" >
			<span class="price">￥{{parseFloat(cart.price).toFixed(2)}}</span>
			<span>库存{{cart.stock}}件</span>
			<span v-if="tips == ''" v-show="selectType.length != 0" v-model="selectType">已选：
				<small v-for="type in selectType" :key="type">{{type}} </small>
			</span>
			<span class="tips" v-else>{{tips}}</span>
		</div>
	</div>
	<div class="popup-content">
		<checker v-for="(value, index) in cart.sortType" :key="index"
			v-model="selectType[index]"
		    type="radio"
		    default-item-class="item"
		    selected-item-class="item-selected"
		    >
		    <div class="cart-type">{{cart.sort[index]}}</div>
		    <checker-item v-for="(sort, ind) in value" :key="sort" :value="sort">{{sort}}</checker-item>
		</checker>
		<group>
	    <x-number title="购买数量" v-model="amount" button-style="round" :min="1"></x-number>
	  </group>
	</div>
	<div class="popup-bottom">
		<el-row>
			<el-col :span="12">
				<div class="add-to-shopcar-btn">加入购物车</div>
			</el-col>
			<el-col :span="12">
				<div class="buy-now-btn">立即购买</div>
			</el-col>
		</el-row>
	</div>
</div>
</template>

<script>
import { Group, Checker, CheckerItem, XNumber  } from 'vux'
import { mapMutations  } from 'vuex'

export default{
	components: {
		Group,
		Checker,
		CheckerItem,
		XNumber 
	},
	data(){
		return{
			selectPrice: 19.50,
			selectType: [],
			amount: 0
		}
	},
	props: {
		cart: [Object],
	},
	watch: {
		selectType(val, oldVal){
			this.tips = '123';
		}
	},
	computed :{
		tips: function(){
			var flag = false;
			var text = '';
			var index = 0;
			for (var select of this.selectType) {
				if (select == "" || select == null) {
					if (flag) {
						text += '，' + this.cart.sort[index];
					} else {
						text += this.cart.sort[index];
					}
					flag = true;
				}
				index++;
			}
			if (flag) {
				return '请选择' + text;
			} else {
				return '';
			}
		}
	},
	mounted(){
		this.selectType = new Array(this.cart.sort.length)
	}
}
</script>

<style scoped lang="less">
@bgc: #F1F1F1;
@buybc: #FF6537;
@addbc: #E9A34A;
@bdc: #F1F1F1;

.sort-popup-content{
		background-color: #FFF;
		padding-top: 120px;
		padding-bottom: 50px;
		.popup-top{
			padding: 10px 0;
			position: absolute;
			width: 100%;
			top: 0;
			height: 100px;
			.cart-pic{
				padding-left: 10px;
				height: 100px;
				margin: 0 auto;
				float: left;
			}
			.select-info{
				span{
					display: block;
					margin-left: 120px;
				}
				.price{
					color: red;
					font-size: 16px;
				}
			}
		}
		.popup-content{
			padding: 0 20px;
			overflow-x: hidden;
			overflow-y: auto;
			height: 230px;
			.item {
			  padding: 4px 10px;
			  text-align: center;
			  border-radius: 10px;
			  background-color: #F1F1F1;
			  border-color: #F1F1F1;
			  margin-right: 6px;
			  margin-top: 10px;
			  margin-right: 10px;
			}
			.item-selected {
			  background: @buybc;
			  color: #FFF;
			}
			.cart-type{
				padding-top: 20px;
				font-size: 14px;
			}
			.vux-checker-box{
				padding-bottom: 10px;
				position: relative;
			}
			.vux-checker-box:not(:first-child)::before{
				content: " ";
			    position: absolute;
			    left: 0;
			    top: 0;
			    right: 0;
			    height: 1px;
			    border-bottom: 1px solid #D9D9D9;
			    color: #D9D9D9;
			    -webkit-transform-origin: 0 100%;
			    transform-origin: 0 100%;
			    -webkit-transform: scaleY(0.5);
			    transform: scaleY(0.5);
			}
		}
		.popup-bottom{
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 50px;
		}
	}
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
	.tips{
		color: red;
	}
</style>