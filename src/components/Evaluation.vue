<template>
  <div class="evaluation">
    <div class="classify">
        <span v-for="(item,index) in classifyArr" class="item" :class="{'active': item.active, 'bad': index==2, 'badActive':item.active&&index==2}" @click="filterEval(item)">
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
        <li class="eval" v-for="eval in evalArr">
          <div class="avatar">
            <img :src="eval.avatar" width="28" height="28">
          </div>
          <div class="content">
            <div class="user">
              <span class="name">{{eval.username}}</span>
              <span class="rateTime">{{eval.rateTime | time}}</span>
            </div>
            <div class="star-wrapper">
              <star :size="24" :score="eval.score"></star>
              <span class="deliveryTime">{{eval.deliveryTime}}分钟送达</span>
            </div>
            <div class="text">{{eval.text}}</div>
            <div class="recommend">
              <span class="icon icon-thumb_up" v-show="eval.recommend.length"></span>
              <span class="dish" v-for="dish in eval.recommend">{{dish}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classifyArr: [{
        name: '全部',
        count: 0,
        active: true
      }, {
        name: '推荐',
        count: 0,
        active: false
      }, {
        name: '吐槽',
        count: 0,
        active: false
      }],
      evalflag: true
    }
  },
  created () {
    this._initClassifyArr()
  },
  methods: {
    _initClassifyArr () {
      this.classifyArr.forEach((data, index) => {
        if (index) {
          data.count = this.ratings.filter(rating => rating.rateType === index - 1).length
        } else {
          data.count = this.ratings.length
        }
      })
    },
    toggleEvalFlag () {
      this.evalflag = !this.evalflag
    },
    filterEval (classifyItem) {
      this.classifyArr.forEach(data => {
        data.active = false
      })
      classifyItem.active = true
    }
  }
}
</script>

<style>

</style>
