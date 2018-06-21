import * as types from './mutation-types'

const mutations = {
    [types.SET_RECOMMEND](state,recommend) {
        state.recommend = recommend
    }
}

export default mutations;