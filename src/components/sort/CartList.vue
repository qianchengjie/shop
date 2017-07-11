<template>
	<div class="sort-goods">
		<ul class="goods-list">
			<li @click="showCart(cart.id)" v-for="cart in sortCartList" :key="cart.id"><a>
				<img :src="cart.pics[0].src">
				<div class="good-info">
					<p>{{cart.name}}</p>
					<span class="price"> ¥{{parseInt(cart.price).toFixed(2)}} </span>
				</div>
			</a></li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
	components : {},
	data(){
		return{
		}
	},
	computed: {
		...mapGetters({
			sortCartList: 'sortCartList'
		}) 
	},
	methods: {
		showCart(id){
			this.$router.push({name:'cart',params:{cartId: id}})
		}
	}
}
</script>

<style scoped>
.sort-goods{
	float: left;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	width: 75vw;
}
.goods-list{}
.goods-list li{
	margin-top: 3vw;
	margin-bottom: 2vw;
	float: left;
	margin-left: 5vw;
	width: 30vw;
	box-sizing: border-box;
	border: 1px solid #F1F1F1;
	box-shadow: 1px 2px 5px #F1F1F1;
}
.goods-list li a{
	color: #5F5F5F;
}
.goods-list a img{
	width: 100%;
	height: 30vw;
}
.goods-list .good-info{
	border-top: 1px solid #F1F1F1;
	padding: 4px;
}
.goods-list .good-info p{
	margin: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.goods-list .good-info span{
	width: 100%;
	color: red;
	text-align: right;
}

.sort-goods::after,.sort-body::after{
	content: "";
	display: block;
	height: 0;
	overflow: hidden;
	visibility: hidden;
	clear: both;
}
</style>