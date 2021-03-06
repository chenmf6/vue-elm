<template>
<div>
  <div class="shopCart">
    <div class="content">
      <div class="content-left" @click="toggleList">
        <div class="logo-wrapper">
          <div class="badge" v-show="cartTotal">{{cartTotal}}</div>
          <div class="logo" :class="{'active':cartTotal}">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price" :class="{'active':cartTotal}">￥{{cartTotal}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class="{'enough':cartTotal>=minPrice}" @click="checkout" :enabled="checkoutEnabled">{{payDesc}}</div>
    </div>

    <transition name="transHeight">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="clearCart">清空</span>
        </div>
        <div class="list-content" ref="foodlist">
          <ul>
            <li v-for="item in cartItems" class="food">
              <span class="name">{{item.name}}</span>
              <div class="price">
                <span>￥{{item.price * item.quantity}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cart-control :food="item"></cart-control>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>

  <transition name="fade-backdrop">
    <div class="backdrop" v-show="listShow" @click="listShow=false"></div>
  </transition>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapGetters, mapActions} from 'vuex'
import CartControl from './CartControl'

export default {
  components: {CartControl},
  data () {
    return {
      listShow: false
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal', 'minPrice', 'deliveryPrice']),
    payDesc () {
      if (!this.cartTotal) {
        return `￥${this.minPrice}起送`
      }
      let diff = this.minPrice - this.cartTotal
      if (diff > 0) {
        return `还差￥${diff}元`
      } else {
        return '去结算'
      }
    },
    checkoutEnabled () {
      return this.cartTotal >= this.minPrice
    }
  },
  watch: {
    cartTotal: function (val) {
      if (!val) {
        this.listShow = false
      }
    }
  },
  methods: {
    ...mapActions(['clearCart', 'checkout']),
    toggleList () {
      if (!this.cartItems.length) {
        return
      }
      this.listShow = !this.listShow
      if (this.listShow) {
        this.$nextTick(() => {
          if (!this.foodlistScroll) {
            this._initScroll()
          } else {
            this.foodlistScroll.refresh()
          }
        })
      }
    },
    _initScroll () {
      this.foodlistScroll = new BScroll(this.$refs.foodlist, {
        click: true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopCart
    position fixed
    left 0
    bottom 0
    width 100%
    height 48px
    z-index 1
    .content
      display flex
      background #141d27
      .content-left
        flex 1
        height 48px
        .logo-wrapper
          display inline-block
          vertical-align top
          position: relative
          height: 56px
          line-height: 56px
          border-radius: 50%
          width: 56px
          top: -10px
          background: #141d27
          margin:0 12px
          padding 6px
          box-sizing border-box
          text-align: center
          .badge
            position absolute
            top: 0;
            right 0
            background: rgb(240,20,20);
            color: white;
            width 24px
            height 16px
            line-height: 16px;
            font-size: 9px;
            box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4);
            font-weight: 700;
            border-radius: 16px;
            text-align center
          .logo
            width 100%
            height 100%
            background: #2b343c
            border-radius: 50%
            font-size: 24px
            color: #80858a
            line-height: 44px
            font-weight: 700
            &.active
              background: rgb(0,160,220);
              color: white;
        .price
          display inline-block
          vertical-align top
          font-size 16px
          margin-top 12px
          padding-right 12px
          box-sizing border-box
          color rgba(255,255,255,0.4)
          font-weight 700
          line-height 24px
          border-right 1px solid rgba(255,255,255,0.1)
          &.active
            color white
        .desc
          position relative
          display inline-block
          vertical-align top
          margin 12px 0 0 12px
          font-size 10px
          color rgba(255,255,255,0.4)
          font-weight 700
          line-height 24px
      .content-right
        flex 0 0 105px
        font-size 12px
        font-weight 700
        background #2b343c
        color rgba(255,255,255,0.4)
        line-height 48px
        text-align center
        &.enough
          background #00b43c
          color white
    .shopcart-list
      position absolute
      top 0
      left 0
      width 100%
      background white
      transform translate3d(0,-100%,0)
      z-index -1
      &.transHeight-enter-active,&.transHeight-leave-active
        transition all 0.5s
      &.transHeight-enter,&.transHeight-leave-active
        transform translate3d(0,0,0)
      .list-header
        height 40px
        line-height 40px
        background #f3f5f7
        border-bottom 1px solid rgba(7,17,27,0.1)
        .title
          display inline-block
          font-size 14px
          font-weight 200
          color rgb(7,17,27)
          padding-left 18px
        .empty
          position absolute
          right 8px
          font-size 12px
          color rgb(0,160,220)
          padding 0 10px
      .list-content
        max-height 217px
        overflow hidden
        .food
          position relative
          display flex
          height 48px
          margin 0 18px
          border-bottom 1px solid rgba(7,17,27,0.1)
          .name
            flex 1
            font-size 14px
            color rgb(7,17,27)
            line-height 48px
            font-weight 700
          .price
            font-size 14px
            font-weight 700
            color rgb(240,20,20)
            padding 0 12px 0 18px
            line-height 48px
          .cartcontrol-wrapper
            font-size 14px
            margin-top 6px
  .backdrop
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background rgba(7,17,27,0.6)
    backdrop-filter blur(10px)
    z-index 40
    &.fade-backdrop-enter-active,&.fade-backdrop-leave-active
      transition opacity 0.5s
    &.fade-backdrop-enter,&.fade-backdrop-leave-active
      opacity 0
</style>
