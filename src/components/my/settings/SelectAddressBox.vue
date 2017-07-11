<template>
	<div class="address" v-show="thisShow">
        <div class="vux-header">
            <div @click="back" class="vux-header-left">
            <a class="vux-header-back">选择地区</a>
                <div class="left-arrow">

                </div>
            </div> 
            <h1 class="vux-header-title">
                <span style="display: none;">
                
                </span>
            </h1>
        </div>
        <div class="vux-header-block"></div>
        <div id="address-box">
            <p>
                <div id="province" name="province"></div>
                <div id="city" name="city"></div>
                <div id="area" name="area"></div>
            </p>
        </div>

    </div>
</template>

<script>
    import _citys from '@/static/js/jquery.citys'
    import {  XHeader  } from 'vux'

    export default {
     components: {
      XHeader
  },
  data(){
      return{
          lastSelect: '',
          _this: this,
          thisShow: this.show,
          area: ''
      }
  },
  props: {
    show: [Boolean]
},
methods: {
    back(){
        var $province = jq('#province');
        var $city = jq('#city');
        var $area = jq('#area');
        if ( this.lastSelect == 'province') {
            $province.show();
            $city.hide();
            this.lastSelect = '';
        } else if ( this.lastSelect == 'city') {
            $city.show();
            this.lastSelect =  'province';
            $area.hide();
        } else if (this.thisShow && this.lastSelect == '') {
            this.$emit('on-show-change', false)
        }
    }
},
watch: {
    show(val){
        this.thisShow = val;
        jq('#province').show()
    }
},
mounted(){
    var _this = this;
    var $province = jq('#province');
    var $city = jq('#city');
    var $area = jq('#area');

    jq('#address-box').citys({
        required:false,
        nodata:'disabled',
        onChange:function(data){
            _this.area = data['province']+' '+data['city']+' '+data['area'];
            if (data['area']!='') {
                _this.$emit('on-show-change', false)
                _this.$emit('on-area-change', _this.area)
                _this.lastSelect = '';
            }
        }
    });

    $province.on('click', '.option', function(){
      $city.show()
      $area.show()
      _this.lastSelect = 'province'
      document.getElementById('address-box').scrollTop = 0;
    })
    $city.on('click', '.option', function(){
        if (_this.lastSelect == 'province') {
            $area.show();
            _this.lastSelect = 'city';
        }
        _this.lastSelect = 'city';
    })
    $area.on('click', '.option', function(){
        _this.lastSelect = 'area';
    })
}
}
</script>

<style scoped>
    .address{
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: #F1F1F1;
        overflow-y: hidden;
        overflow-x: hidden;
    }
    .vux-header{
        position: fixed;
        width: 100vw;
        top: 0;
        z-index: 1;
    }
    .vux-header-block{
        height: 46px;
    }
    #address-box{
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>