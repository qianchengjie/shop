<template>
<div>
	<swiper class="swiper" :aspect-ratio="1/1" v-model="swiperItemIndex" dots-position="center">
			<swiper-item v-for="(item, index) in list" :key="index"  @click.native="show(index)">
				<img class="swiper-img" :src="item.src">
			</swiper-item>
		</swiper>
		<div v-transfer-dom>
			<previewer :list="list" ref="previewer" :options="options"></previewer>
		</div>
</div>
</template>

<script>
	import { Previewer, TransferDom, Swiper, SwiperItem} from 'vux'

	export default{
		directives: {
			TransferDom
		},
		components: {
			Previewer,
			Swiper,
			SwiperItem
		},
		methods: {
			show (index) {
				this.$refs.previewer.show(index)
			}
		},
		props: {
			list: [Array]
		},
		data () {
			return {
				sortPopup: false,
				swiperItemIndex: 0,
				options: {
					getThumbBoundsFn (index) {
						let thumbnail = document.querySelectorAll('.swiper-img')[index]
						let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
						let rect = thumbnail.getBoundingClientRect()
						return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
					}
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@bgc: #F1F1F1;
	.vux-slider{
		background-color: #FFF;
	}
	.vux-swiper .vux-swiper-item{
		background-color: #FFF;
		line-height: 100vw;
	}
	.swiper-img{
		width: 100%;
	}
</style>