import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import Icon from 'vue-svg-icon/Icon.vue'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

//配置Ajax
Vue.prototype.$ajax = axios

// vux插件
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// icon图标插件
Vue.component('icon', Icon);
// 配置路由
Vue.use(VueRouter)
// 加载动画
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', true)
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', false)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
