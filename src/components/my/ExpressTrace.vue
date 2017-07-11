<template>
  <div class="bgc">
    <m-header></m-header>
    <el-row>
      <el-col>
        <el-row>
          <el-col>
            承运公司：{{express.name}}
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            运单编号：{{express.logisticCode}}
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div v-if="traces.length == 0">
      <h4>{{reason}}</h4>
    </div>
    <timeline class="timeline">
    <timeline-item v-for="(trace, index) in  traces" :key="index">
        <h4 :class="index == 0?'recent':''">{{trace.AcceptStation}}</h4>
        <p :class="index == 0?'recent':''">{{trace.AcceptTime}}</p>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
  import { Timeline, TimelineItem } from 'vux'

  export default{
   components:{
    Timeline,
    TimelineItem,
    MHeader: ()=> import('@/components/common/MHeader')
  },
  data(){
    return{
      traces: [],
      reason: '',
      express: {
        name: '韵达',
        shipperCode: 'YD',
        logisticCode: '3931476488365'
      }
    }
  },
  mounted(){
   var _this = this;
   this.$ajax({
    method: 'get',
    url: 'http://qianchengjie.cn/kdn/getExpressTrack?shipperCode=' + this.express.shipperCode + '&logisticCode=' + this.express.logisticCode + ''
  }).then(function(res){
    _this.traces = res.data.Traces.reverse();
    console.log(res.data)
    _this.reason = res.data.Reason;
  })
}
}
</script>

<style lang="less" scoped>
  .timeline {
    background-color: #FFF;
    p{
      color: #888;
      font-size: 0.8rem;
      margin-left: 1rem;
    }
    h4 {
      color: #666;
      font-weight: normal;
      margin-left: 1rem;
    }
    .recent {
      color: rgb(4, 190, 2)
    }
  }
  .bgc{
    background-color: #F1F1F1;
  }
</style>