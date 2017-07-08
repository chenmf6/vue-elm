<template>
<div class="iconMap" :class="[ supportTypes[supportType], iconMapType ]"></div>
</template>

<script>
export default {
  props: {
    supportType: Number,
    iconType: Number
  },
  computed: {
    iconMapType () {
      return 'iconType-' + this.iconType
    }
  },
  data () {
    return {
      supportTypes: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/mixin'
  .iconMap
    display inline-block
    background-size 100% 100%
    background-repeat no-repeat
    width 12px
    height 12px
    &.iconType-4
      &.decrease
        bg-image('decrease_4')
      &.discount
        bg-image('discount_4')
      &.guarantee
        bg-image('guarantee_4')
      &.invoice
        bg-image('invoice_4')
      &.special
        bg-image('special_4')
    &.iconType-2
      &.decrease
        bg-image('decrease_2')
      &.discount
        bg-image('discount_2')
      &.guarantee
        bg-image('guarantee_2')
      &.invoice
        bg-image('invoice_2')
      &.special
        bg-image('special_2')
    &.iconType-1
      &.decrease
        bg-image('decrease_1')
      &.discount
        bg-image('discount_1')
      &.guarantee
        bg-image('guarantee_1')
      &.invoice
        bg-image('invoice_1')
      &.special
        bg-image('special_1')
</style>
