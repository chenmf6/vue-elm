/**
 * Created by chenmf on 2017/7/6.
 */
import * as types from '../mutation_types'

const state = {
  goods: []
}

const mutations = {
  [types.SET_GOODS] (state, {goods}) {
    state.goods = goods
  }
}

export default {
  state,
  mutations
}
