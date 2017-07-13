<template>
  <div class="evaluation">
    <slot name="evalName"></slot>
    <div class="classify">
        <span v-for="(item,index) in classifyTags" class="item" :class="{'active': item.active, 'bad': index==2, 'badActive':item.active&&index==2}" @click="filterEval(item)">
          {{item.name}}
          <span class="count">{{item.count}}</span>
        </span>
    </div>
    <div class="switch" @click="toggleEvalFlag">
      <span class="icon-check_circle" :class="{'on':evalflag}"></span>
      <span class="text">只看有内容的评价</span>
    </div>
    <div class="eval-list">
      <ul>
        <slot name="evalDetails" v-for="eval in evalArr" :eval="eval"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratings: Array
  },
  data () {
    return {
      classifyTags: [{
        name: '全部',
        count: this.ratings.length,
        active: true
      }, {
        name: '推荐',
        count: this.ratings.filter(data => data.rateType === 0).length,
        active: false
      }, {
        name: '吐槽',
        count: this.ratings.filter(data => data.rateType).length,
        active: false
      }],
      evalflag: true
    }
  },
  computed: {
    evalArr () {
      let selectIndex = 0
      this.classifyTags.forEach((data, index) => {
        if (data.active) {
          selectIndex = index
        }
      })
      this.$emit('refreshEval')
      return selectIndex
        ? this.ratings.filter(data => this.evalflag ? data.rateType === selectIndex - 1 && data.text : data.rateType === selectIndex - 1)
        : this.ratings.filter(data => this.evalflag ? data.text : true)
    }
  },
  watch: {
    ratings: function () {
      this._updateClassifyTags()
    }
  },
  methods: {
    _updateClassifyTags () {
      this.classifyTags.forEach((data, index) => {
        if (index) {
          data.count = this.ratings.filter(item => item.rateType === index - 1).length
        } else {
          data.count = this.ratings.length
        }
      })
    },
    toggleEvalFlag () {
      this.evalflag = !this.evalflag
    },
    filterEval (classifyItem) {
      this.classifyTags.forEach(data => {
        data.active = false
      })
      classifyItem.active = true
    }
  }
}
</script>

<style lang="stylus">
  .evaluation
    padding 18px 0
    position relative
    .classify
      padding-bottom 18px
      margin 0 18px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .item
        display inline-block
        font-size 12px
        padding 8px 12px
        line-height 16px
        background rgba(0,160,220,0.2)
        color rgb(77,85,95)
        margin-right 8px
        .count
          font-size 8px
          padding-left 2px
        &.active
          color white
          background rgb(0,169,220)
        &.bad
          background rgba(77,85,93,0.2)
        &.badActive
          background #4d555d
    .switch
      font-size 12px
      width 100%
      padding 12px 0 12px 18px
      color rgb(147,153,159)
      border-bottom 1px solid rgba(7,17,27,0.1)
      .icon-check_circle
        font-size 24px
        vertical-align middle
        &.on
          color #00c850
</style>
