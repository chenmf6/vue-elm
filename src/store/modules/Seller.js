/**
 * Created by chenmf on 2017/7/6.
 */
import * as types from '../mutation_types'

const state = {
  seller: {}
}

const getters = {
  seller: state => state.seller
}

const mutations = {
  [types.SET_SELLER] (state, {seller}) {
    state.seller = seller
  }
}

export default {
  state,
  getters,
  mutations
}
