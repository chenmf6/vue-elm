<template>
<div class="cart-control">
  <transition name="fadeRotate">
    <div class="cart-decrease" v-show="isFoodInCart" @click.stop.prevent="removeFromCart(food)">
      <span class="icon-remove_circle_outline inner"></span>
    </div>
  </transition>
  <div class="cart-count" v-show="isFoodInCart"></div>
  <div class="cart-add" @click.stop.prevent="addToCart(food)">
    <i class="icon-add_circle"></i>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: {
    food: Object
  },
  computed: {
    ...mapGetters(['cartItems']),
    isFoodInCart () {
      return this.cartItems.some(item => {
        return item.name === this.food.name
      })
    }
  },
  methods: {
    ...mapActions(['removeFromCart', 'addToCart'])
  }
}
</script>

<style lang="stylus">
  .cart-control
    .cart-decrease
      display inline-block
      padding 6px
      transition: all .4s linear
      .inner
        line-height 24px
        font-size 24px
        color rgb(0,160,220)
        transition all 0.4s linear
      &.fadeRotate-enter-active, &.fadeRotate-leave-active
        transform translate3d(0,0,0)
        .inner
          display inline-block
          transform rotate(0)
      &.fadeRotate-enter, &.fadeRotate-leave-active
        opacity: 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
    .cart-count
      display inline-block
      vertical-align top
      font-size 10px
      color rgb(147,153,159)
      line-height 24px
      text-align center
      padding 6px 0
    .cart-add
      display inline-block
      vertical-align top
      font-size 24px
      color rgb(0,160,220)
      line-height 24px
      padding 6px
</style>
