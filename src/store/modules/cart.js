/**
 * Created by chenmf on 2017/7/6.
 */
import * as types from '../mutation_types'

const state = {
  added: []
}

const getters = {
  cartItems: state => state.added,
  cartTotal: state => state.added.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

const actions = {
  addToCart ({commit}, food) {
    commit(types.ADD_TO_CART, {food})
  },
  removeFromCart ({commit}, food) {
    commit(types.REMOVE_FROM_CART, {food})
  },
  clearCart ({commit}) {
    commit(types.CLEAR_CART)
  },
  checkout ({commit}) {
    commit(types.CLEAR_CART)
  }
}

const mutations = {
  [types.ADD_TO_CART] (state, {food}) {
    let record = state.added.find(item => item.name === food.name)
    if (!record) {
      state.added.push({
        name: food.name,
        quantity: 1,
        price: food.price
      })
    } else {
      record.quantity++
    }
  },
  [types.REMOVE_FROM_CART] (state, {food}) {
    let recordIndex = state.added.findIndex(item => item.name === food.name)
    if (!(--state.added[recordIndex].quantity)) {
      state.added.splice(recordIndex, 1)
    }
  },
  [types.CLEAR_CART] (state) {
    state.added = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
