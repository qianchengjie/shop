<template>
<div class="shopcart-top">
	<h4>光远科技</h4>
	<span class="edit" @click="cartListEdit">{{text}}</span>
</div>
</template>

<script>
export default{
	data(){
		return{
			edit: false,
			text: '编辑'
		}
	},
	methods : {
		cartListEdit(){
			if (this.edit) {
				this.$parent.$parent.edit = false;
				this.edit = false;
				this.text = '编辑';
			} else {
				this.$parent.$parent.edit = true;
				this.edit = true;
				this.text = '完成';
			}
		}
	},
}
</script>

<style scoped>
.shopcart-top{
	height: 40px;
	border-bottom: 1px solid #E1E1E1;
	position: absolute;
	top:0;
	box-shadow: 2px 0px 8px #E1E1E1;
	width: 100vw;
	z-index: 1;
	background-color: #FFF;
}
.shopcart-top h4{
	margin: 0;
	line-height: 40px;
	padding-left: 1em;
}
.shopcart-top span{
	position: absolute;
	top: 1em;
	right: 1em;
}
</style>