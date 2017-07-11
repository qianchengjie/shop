import Vue from 'vue'
import Router from 'vue-router'

import WechatTitle from 'vue-wechat-title'

Vue.use(Router)
Vue.use(WechatTitle)

export default new Router({
	base: '/',
	routes: [
		{
			path: '/selectAddress',
			name: 'selectAddress',
			component: () => import('@/views/shop/my/settings/SelectAddress')
		},
		{
			path: '/editAddress',
			name: 'editAddress',
			component: () => import('@/views/shop/my/settings/EditAddress')
		},
		{
			path: '/address',
			name: 'address',
			component:  () => import('@/views/shop/my/Settings/Address')
		},
		{
			path: '/',
			name: 'shop',
			component: () => import('@/views/shop/Shop'),
			meta: {
		      title: '光远科技'
		    },
			children: [
				{
					path: 'index',
					name: 'index',
					meta: {
				      title: '首页'
				    },
				},
				{
					path: 'sort',
					name: 'sort',
					meta: {
				      title: '分类'
				    },
					component:  () => import('@/views/shop/Sort'),
				},
				{
					path: 'shopcar',
					name: 'shopcar',
					meta: {
				      title: '购物车'
				    },
					component:  () => import('@/views/shop/Shopcar')
				},
				{
					path: 'my',
					name: 'my',
					meta: {
				      title: '我的'
				    },
					component:  () => import('@/views/shop/My'),
				}
			]
		},
		{
			path: '/order',
			name: 'order',
			meta: {
				title: '我的订单'
			},
			component:  () => import('@/views/shop/my/Order')
		},
		{
			path: '/cart',
			name: 'cart',
			meta: {
				title: '商品详情'
			},
			component:  () => import('@/views/shop/Cart')
		},
		{
			path: '/express',
			name: 'express',
			meta: {
				title: '物流详情'
			},
			component:  () => import('@/components/my/ExpressTrace')
		},
		{
			path: '/settings',
			name: 'settings',
			meta: {
				title: '设置'
			},
			component:  () => import('@/views/shop/my/Settings')
		},
	]
})
