/**
 * Created by chenmf on 2017/7/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createLogger from 'vuex/dist/logger'

import seller from './modules/seller'
import goods from './modules/goods'
import cart from './modules/cart'
import * as types from './mutation_types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const actions = {
  loadSeller ({commit}) {
    return axios.get('static/data.json').then((res) => {
      commit(types.SET_SELLER, {seller: res.data.seller})
    }).catch((error) => {
      console.log(error)
    })
  },
  loadGoods ({commit}) {
    axios.get('static/data.json').then((res) => {
      commit(types.SET_GOODS, {goods: res.data.goods})
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default new Vuex.Store({
  actions,
  modules: {
    seller,
    goods,
    cart
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
