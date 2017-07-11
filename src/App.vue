<template>
  <div id="app">
       <router-view v-if="show" v-wechat-title="$route.meta.title"></router-view>
       <!-- <router-view v-if="show"></router-view> -->
    <div v-transfer-dom>
    <loading v-model="isLoading" :text="lodingText"></loading>
    </div>
  </div>
</template>

<script>
  import shop from './views/shop/Shop'
  import { Loading, TransferDomDirective as TransferDom } from 'vux'
  import { mapGetters, mapState} from 'vuex'

export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    Loading,
    shop
  },
  data(){
    return{
      show: true,
      lodingText: '正在加载中'
    }
  },
  computed:{
    ...mapGetters({
      isLoading: 'getLoadingStatus'
    })
  },
  methods:{
    getStatus(status){
      this.show = status;
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

html,body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-size: 12px;
    font-family:'MicroSoft YaHei';
}
#app{
  height:100%;
}
*{
	margin: 0;
	padding: 0;
	outline: none;
}
li{list-style: none;}
a{text-decoration: none;}
a:hover{text-decoration: none;}
.pg-view{
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.vux-cell-bd{
  font-size: 16px;
}
.weui-cell__ft{
  font-size: 14px;
}
.weui-cell__hd{
  font-size: 16px;
}
  .vux-check-icon > .weui-icon-success:before, .vux-check-icon > .weui-icon-success-circle:before{
    color: #FFA800 !important;
  }
  .view-box{
    background-color: #F1F1F1;
  }
</style>
