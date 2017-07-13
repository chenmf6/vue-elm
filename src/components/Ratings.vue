<template>
<div class="ratingsWrapper" ref="ratingsWrapper">
  <div class="ratings-content">
    <div class="info">
      <div class="mark">
        <div class="num">{{seller.score}}</div>
        <div class="text">综合评分</div>
        <div class="contrast">高于周边商家{{seller.rankRate}}%</div>
      </div>

      <div class="stars">
        <div class="serviceScore">
          <span class="text">服务态度</span>
          <star :size="36" :score="seller.serviceScore"></star>
          <span class="num">{{seller.serviceScore}}</span>
        </div>
        <div class="foodScore">
          <span class="text">服务态度</span>
          <star :size="36" :score="seller.foodScore"></star>
          <span class="num">{{seller.foodScore}}</span>
        </div>
        <div class="deliveryTime">
          <span class="text">送达时间</span>
          <span class="time">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <evaluation :ratings="ratings" @refreshEval="refreshScroll">
      <template slot="evalDetails" scope="props">
        <li class="eval">
          <div class="avatar">
            <img :src="props.eval.avatar" width="28" height="28">
          </div>
          <div class="content">
            <div class="user">
              <span class="name">{{props.eval.username}}</span>
              <span class="rateTime">{{props.eval.rateTime | time}}</span>
            </div>
            <div class="star-wrapper">
              <star :size="24" :score="props.eval.score"></star>
              <span class="deliveryTime">{{props.eval.deliveryTime}}分钟送达</span>
            </div>
            <div class="text">{{props.eval.text}}</div>
            <div class="recommend">
              <span class="icon icon-thumb_up" v-show="props.eval.recommend.length"></span>
              <span class="dish" v-for="dish in props.eval.recommend">{{dish}}</span>
            </div>
          </div>
        </li>
      </template>
    </evaluation>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import {mapGetters} from 'vuex'
import Star from './star/Star'
import Evaluation from './Evaluation'

export default {
  components: {Star, Evaluation},
  data () {
    return {
      ratings: []
    }
  },
  computed: {
    ...mapGetters(['seller'])
  },
  created () {
    this._init()
  },
  methods: {
    _init () {
      axios.get('static/data.json').then(res => {
        this.ratings = res.data.ratings
        this.$nextTick(() => {
          this._initScroller()
        })
      })
    },
    _initScroller () {
      this.ratingsScroll = new BScroll(this.$refs.ratingsWrapper, {click: true})
    },
    refreshScroll () {
      if (this.ratingsScroll) {
        this.$nextTick(() => {
          this.ratingsScroll.refresh()
        })
      }
    }
  }
}
</script>

<style lang="stylus">
  .ratingsWrapper
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
  .ratings-content
    .info
      display flex
      .mark
        flex 0 0 138px
        margin 18px 0
        border-right 1px solid rgba(7,17,27,0.1)
        text-align center
        .num
          font-size 24px
          color rgb(255,153,0)
          line-height 28px
        .text
          padding 6px 0 8px 0
          font-size 12px
          color rgb(7,17,27)
          line-height 12px
        .contrast
          font-size 10px
          color rgb(7,17,27)
          line-height 10px
          margin-bottom 6px
      .stars
        padding 18px 24px
        .serviceScore,.foodScore,.deliveryTime
          display flex
          margin-bottom 8px
          .text
            font-size 12px
            color rgb(7,17,27)
            line-height 18px
            margin-right 12px
          .num
            font-size 12px
            line-height 18px
            color rgb(255,153,0)
            padding-left 12px
        .deliveryTime
          margin-bottom 0
          .time
            font-size 12px
            color rgb(147,153,159)
            line-height 18px
    .eval-list
    .eval
      display flex
      padding 18px 0
      margin 0 18px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .avatar
        flex 0 0 28px
        margin-right 12px
        img
          border-radius 50%
      .content
        flex 1
        .user
          font-size 10px
          color rgb(7,17,27)
          line-height 12px
          .rateTime
            position absolute
            font-weight 200
            right 18px
            color rgb(147,153,159)
        .star-wrapper
          font-size 0
          padding-top 4px
          margin-bottom 6px
          .star
            display inline-block
          .deliveryTime
            font-size 10px
            padding-left 6px
            font-weight 200
            color rgb(147,153,159)
        .text
          font-size 12px
          color rgb(7,17,27)
          line-height 18px
        .recommend
          padding-top 4px
          .icon
            font-size 12px
            color rgb(0,160,220)
            line-height 16px
          .dish
            display inline-block
            font-size 9px
            color rgb(147,153,159)
            line-height 16px
            border 1px solid rgba(7,17,27,0.1)
            padding 2px 6px
            margin-right 8px
            white-space normal
            margin-top 4px
</style>
