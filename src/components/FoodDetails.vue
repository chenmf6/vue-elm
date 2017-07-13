<template>
  <transition name="move">
    <div class="detailsWrapper" ref="detailsWrapper" v-show="showDetails">
      <div class="foodDetails">
        <div class="back" @click="showToggle">
          <i class="icon-arrow_lift"></i>
        </div>
        <img :src="food.image" height="425" width="100%">
        <div class="info">
          <div class="title">{{food.name}}</div>
          <div class="desc">
            <span>月售{{food.sellCount}}份</span>
            <span>好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="unit">￥</span>{{food.price}}
            <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="shopCart">
            <transition name="fade">
              <div class="text" @click="addToCart({food})" v-show="!isFoodInCart">加入购物车</div>
            </transition>
          </div>
          <cart-control :food="food"></cart-control>
        </div>

        <div class="divider"></div>

        <div class="desc">
          <div class="title">商品介绍</div>
          <div class="content">{{food.info}}</div>
        </div>

        <div class="divider"></div>

        <evaluation :ratings="food.ratings" @refreshEval="refreshScroll">
          <template slot="evalName">
            <div class="title">商品评价</div>
          </template>

          <template slot="evalDetails" scope="props">
            <li class="eval">
              <div class="userInfo">
                <div class="time">{{props.eval.ratingTime | time}}</div>
                <div class="user">
                  <span>{{props.eval.username}}</span>
                  <span class="avatar"><img :src="props.eval.avatar" width="12" height="12"> </span>
                </div>
              </div>

              <div class="content">
                <span class="icon" :class="props.eval.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
                <span class="text">{{props.eval.text}}</span>
              </div>
            </li>
          </template>
        </evaluation>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import {mapGetters, mapMutations} from 'vuex'
import CartControl from './CartControl'
import Evaluation from './Evaluation'

export default {
  components: {CartControl, Evaluation},
  props: {
    food: Object
  },
  data () {
    return {
      showDetails: false
    }
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
    ...mapMutations({
      addToCart: 'ADD_TO_CART'
    }),
    showToggle () {
      this.showDetails = !this.showDetails
      if (this.showDetails) {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    _initScroll () {
      if (!this.detailsScroll) {
        this.detailsScroll = new BScroll(this.$refs.detailsWrapper, {
          click: true
        })
      } else {
        this.detailsScroll.refresh()
      }
    },
    refreshScroll () {
      if (this.detailsScroll) {
        this.$nextTick(() => {
          this.detailsScroll.refresh()
        })
      }
    }
  }
}
</script>

<style lang="stylus">
  .detailsWrapper
    position fixed
    left 0
    top 0
    bottom 48px
    width 100%
    background white
    transition all 0.4s ease
    &.move-enter-avtive,&.move-leave-active{
      transform translate3d(0,0,0)
    }
    &.move-enter,&.move-leave-active{
      transform translate3d(100%,0,0)
    }
  .foodDetails
    .back
      position absolute
      color white
      top 12px
      left 6px
      font-size 20px
      padding 10px
    .info
      position relative
      box-sizing border-box
      width 100%
      padding 18px
      .title
        font-size 14px
        font-weight 700
        color rgb(7,17,27)
        line-height 14px
      .desc
        display flex
        padding 0
        padding-top 8px
        font-size 10px
        color rgb(147,153,159)
        line-height 10px
        span:last-child
          padding-left 12px
      .price
        display flex
        padding-top 18px
        font-size 14px
        font-weight 700
        color rgb(240,20,20)
        line-height 24px
        .unit
          font-size 10px
          font-weight normal
        .oldPrice
          padding-left 12px
          font-size 10px
          font-weight normal
          color rgb(147,153,159)
          line-height 24px
      .shopCart
        position absolute
        right 18px
        bottom 18px
        height 24px
        text-align center
        z-index 2
        .text
          box-sizing border-box
          height 100%
          line-height 24px
          color white
          font-size 10px
          padding 0 12px
          border-radius 12px
          background rgb(0,160,220)
          &.fade-enter-active,&.fade-leave-active{
            transition opacity .2s
          }
          &.fade-enter,&.fade-leave-active{
            opacity 0
          }
      .cart-control
        position absolute
        right 12px
        bottom 12px
    .desc
      padding 18px
      .title
        font-size 14px
        font-weight 500
        color #07111b
        margin-bottom 6px
      .content
        font-size 12px
        font-weight 200
        color rgb(77,85,93)
        line-height 24px
        padding 0 8px
    .evaluation
      .title
        padding-left 18px
        padding-bottom  18px
        font-size: 14px
        font-weight 500
        color: #07111b
      .eval-list
        margin 0 18px
        .eval
          padding 16px 0
          border-bottom 1px solid rgba(7,17,27,0.1)
          .userInfo
            display flex
            color rgb(147,153,159)
            font-size 10px
            line-height 12px
            .time
              flex 1
            .user
              flex 1
              text-align right
              .avatar
                img
                  padding-left 6px
                  border-radius 50%
          .content
            padding-top 6px
            .icon
              font-size 12px
              line-height 24px
              &.icon-thumb_up
                color rgb(0,160,220)
              &.icon-thumb_down
                color rgb(147,153,159)
            .text
              font-size 12px
              color rgb(7,17,27)
              line-height 16px
              padding-left 4px
</style>
