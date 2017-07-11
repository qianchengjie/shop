
const state = {
  sortList: [1, 2, 3, 4],
  sortCartList: [
      {
        id: 1,
        name: '原拆有测 For 6代手机 尾插排线 充电数据耳机送话器排线 白色',
        price: 19.50,
        stock: 10,
        deli: 0.00,
        cell: 3,
        stock: 10,
        sort: ['颜色','型号'],
        pics: [
          {
            src: 'https://cbu01.alicdn.com/img/ibank/2016/964/370/2964073469_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
          },
          {
            src: 'https://cbu01.alicdn.com/img/ibank/2015/512/396/2458693215_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
          },
          {
            src: 'https://cbu01.alicdn.com/img/ibank/2015/632/408/2462804236_1701462614.400x400.jpg?imageView2/1/w/750/h/750'
          },
        ]
    },
  ]
}

// getters
const getters = {
  sortList: state => state.sortList,
  sortCartList: state => state.sortCartList
}

// actions
const actions = {
  updateSortCartList({ commit }, sortType){
    commit('updateSortCartList', sortType);
  }
}

// mutations
const mutations = {
  updateSortCartList(state, sortType){
    console.log(1)
    state.sortCartList = [
      {
        id: 1,
        name: '原拆有测 For 6代手机 尾插排线 充电数据耳机送话器排线 白色',
        price: '33.50',
        img: 'https://cbu01.alicdn.com/img/ibank/2017/780/037/3787730087_1237269816.400x400.jpg?imageView2/1/w/200/h/200'
      }
  ]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
