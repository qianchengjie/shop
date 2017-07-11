<template>
<div class="mg-b">
	<x-header class="fixed" :title="title">
	</x-header>
</div>
</template>

<script>
import { XHeader } from 'vux'
export default{
	components:{
		XHeader
	},
	data(){
		return{
			title: ''
		}
	},
	mounted(){
		this.title = this.$route.meta.title;
	}
}
</script>

<style scoped>
.fixed{
	position: absolute;
	top: 0;
	width: 100vw;
	z-index: 10000;
}
.mg-b{
	margin-bottom: 46px;
}
</style>