/**
 * Created by chenmf on 2017/7/6.
 */
import * as types from '../mutation_types'
import axios from 'axios'

const state = {
  goods: []
}

const getters = {
  goods: state => state.goods
}

const actions = {
  loadGoods ({commit}) {
    return axios.get('static/data.json').then((res) => {
      commit(types.SET_GOODS, {goods: res.data.goods})
    }).catch((error) => {
      console.log(error)
    })
  }
}

const mutations = {
  [types.SET_GOODS] (state, {goods}) {
    state.goods = goods
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
