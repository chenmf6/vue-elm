<template>
<transition name="fade">
    <div v-if="detailsShow" class="details" ref="sellerDetailsWrapper">
      <div class="details-content clearfix">
        <div class="details-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>

          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li v-for="item in seller.supports" class="support-item">
              <support-icon class="icon" :supportType="item.type" :iconType="2"></support-icon>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>

          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">{{seller.bulletin}}</div>
        </div>
      </div>
      <div class="details-close">
        <i class="icon-close" @click="toggleShow"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import Star from './star/Star'
import SupportIcon from './iconMap/SupportIcon.vue'
import BScroll from 'better-scroll'

export default {
  components: {Star, SupportIcon},
  props: {
    seller: Object
  },
  data () {
    return {
      detailsShow: false
    }
  },
  methods: {
    _initScroll: function () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.sellerDetailsWrapper, {
          click: true
        })
      }
    },
    toggleShow () {
      this.detailsShow = !this.detailsShow
      if (this.detailsShow) {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .details
    position fixed
    top 0
    left 0
    z-index 100
    width 100%
    height 100%
    background rgba(7,17,27,0.8)
    backdrop-filter blur(10px)
    .details-content
      min-height 100%
      width 100%
      .details-main
        margin-top 64px
        padding-bottom 64px
        .name
          font-size 16px
          font-weight 700
          width 100%
          color rgb(255,255,255)
          line-height 16px
          text-align center
        .star-wrapper
          margin 16px 11px 28px 0
          text-align center
        .title
          display flex
          width 80%
          margin 0 auto 24px auto;
          .line
            display inline-block
            flex 1
            height 1px
            background rgba(255,255,255,0.2)
            margin auto
          .text
            padding 0 12px
            font-size 14px
            font-weight 700
        .supports
          padding 0 0 28px 36px
          .support-item
            color white
            padding 0 6px 12px 16px
            .text
              vertical-align middle
              font-size 12px
              font-weight 200
              color rgb(255,255,255)
              line-height 12px
            .icon
              display inline-block
              vertical-align top
              width 16px
              height 16px
              margin-right 6px
              background-size 100% 100%
              background-repeat no-repeat
        .bulletin
          padding 0 48px
          font-size 12px
          font-weight 200
          color rgb(255,255,255)
          line-height 24px

    .details-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px
      color rgba(255,255,255,0.5)
    &.fade-enter-active, &.fade-leave-active {
      transition: opacity .5s
    }
    &.fade-enter, &.fade-leave-active {
      opacity: 0
    }
</style>
