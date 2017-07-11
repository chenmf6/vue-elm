/**
 * Created by chenmf on 2017/7/6.
 */
import * as types from '../mutation_types'
import axios from 'axios'

const state = {
  seller: {}
}

const getters = {
  seller: state => state.seller
}

const actions = {
  loadSeller ({commit}) {
    return axios.get('static/data.json').then((res) => {
      commit(types.SET_SELLER, {seller: res.data.seller})
    }).catch((error) => {
      console.log(error)
    })
  }
}

const mutations = {
  [types.SET_SELLER] (state, {seller}) {
    state.seller = seller
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
