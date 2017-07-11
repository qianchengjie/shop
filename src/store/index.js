import Vue from 'vue'
import sort from './modules/sort'
import loading from './modules/loading'
import shopcar from './modules/shopcar'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    sort,
    loading,
    shopcar
  }
})
