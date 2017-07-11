/**
 * Created by chenmf on 2017/7/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import seller from './modules/seller'
import goods from './modules/goods'
import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const actions = {
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
