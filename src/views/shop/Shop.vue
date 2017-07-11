<template>
	<div id="shop">
		<transition 
		name="custom-classes-transition" 
		enter-active-class="animated fadeIn">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</transition>
	<tabbar></tabbar>
</div>
</template>

<script>
	import { Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
	import animate from 'animate.css'


	export default{
		directives: {
			TransferDom
		},
		components: {
			tabbar: () => import('@/components/common/Tabbar'),
			Group,
			XSwitch,
			XButton
		},
		data(){
			return{
				index: 0
			}
		},
	    amounted(){
	        switch (this.$route.fullPath) {
	            case '/sort':
	                this.index = 1;
	            break;
	            case '/shopcar':
	                this.index = 2;
	            break;
	            case '/my':
	                this.index = 3;
	            break;
	        }
	        console.log(this.index)
	    }
	}
</script>

<style>
	#shop{
		height: 100%;
	}
</style>