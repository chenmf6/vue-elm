<template>
  <div class="header">
    <!-- content -->
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description + ' / ' + seller.deliveryTime + '分钟送达'}}
        </div>
        <div class="supports" v-if="seller.supports">
          <div class="supports_desc">
            <support-icon class="icon" :supportType="seller.supports[0].type" :iconType="1"></support-icon>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="toggleSellerDetails">
        <span class="count">{{seller.supports.length + '个'}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>

    <!-- bulletin -->
    <div class="bulletin-wrapper" @click="toggleSellerDetails">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <!-- background -->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>

    <seller-details ref="sellerDetails" :seller="seller"></seller-details>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Star from '../star/Star'
  import SupportIcon from '../iconMap/SupportIcon.vue'
  import SellerDetails from '../SellerDetails'

  export default {
    computed: mapGetters(['seller']),
    components: {Star, SupportIcon, SellerDetails},
    methods: {
      toggleSellerDetails: function () {
        this.$refs.sellerDetails.toggleShow()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixin'

  .header
    position relative
    background rgba(7,17,27,0.5)
    color #fff
    blur:10px
    overflow hidden
    .content-wrapper
      position relative
      display flex
      padding: 24px 12px 18px 24px
      font-size 12px
      .avatar
        img
          border-radius 2px
      .content
        margin-left 16px
        .title
          margin 2px 0 8px 0
          font-size 16px
          .brand
            display inline-block
            vertical-align top
            width 30px
            height 18px
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          font-size 12px
          margin-bottom 10px
        .supports
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
          .text
            line-height 12px
            font-size 10px
      .support-count
        position absolute
        right 12px
        bottom 18px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background-color rgba(0,0,0,0.2)
        text-align center
        .count
          vertical-align top
          font-size 10px
        .icon-keyboard_arrow_right
          font-size 10px
          margin-left 2px
          line-height 24px
    .bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7,17,27,0.2)
      .bulletin-title
        display inline-block
        vertical-align top
        margin-top 8px
        width 22px
        height 12px
        bg-image('bulletin')
        background-size 100% 100%
        background-repeat no-repeat
      .bulletin-text
        font-size 10px
        vertical-align middle
        margin 0 4px
      .icon-keyboard_arrow_right
        position absolute
        font-size 10px
        right 12px
        top 8px
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      filter blur(10px)
      z-index -1
</style>
