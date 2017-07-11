
const state = {
    isLoading: false
}

// mutations
const mutations = {
    updateLoadingStatus (state, isLoading) {
      state.isLoading = isLoading
    }
}
const getters = {
	getLoadingStatus: state => state.isLoading
}
export default {
  state,
  getters,
  mutations
}
