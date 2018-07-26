<template>
  <Scroll class="common_content listview" :data="listView" :listenScroll="listenScroll" @scroll="scroll" ref="scroll"
          :probeType="probeType">
    <ul class="list-group-wrapper">
      <li class="list-group" v-for="i of listView" ref="listGroup">
        <h2 class="list-group-title">{{i.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="item in i.items" @click="selectItem(item)">
            <img class="avatar"
                 v-lazy="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortCutTouchStart" @touchmove.stop.prevent="onShortCutTouchMove">
      <ul>
        <li class="item" :class="_currentStyle(index)" v-for="(item,index) in listView" :data-index="index"
            ref="shortcut">
          {{iconTitle(item.title)}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" v-show="isFixedShow" v-if="listView.length>0" ref="listFixed">
      <div class="fixed-title">{{_fixedTitle}}</div>
    </div>
  </Scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import {getData} from 'common/js/dom'

  const SHORT_CUT_HEIGHT = 18
  const LIST_FIXED = 30
  export default {
    props: {
      listView: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        isFixedShow: true
      }
    },
    created() {
      // 定义一个touch对象，用来存储手指位置
      this.touch = {}
      this.listenScroll = true
      this.listHeight = []
      this.probeType = 3
    },
    computed: {
      _fixedTitle() {
        return this.listView.length > 0 ? this.listView[this.currentIndex].title : '热门'
      }
    },
    methods: {
      onShortCutTouchStart(e) {
        let archorIndex = getData(e.target, 'index')
        // 记录初始触摸的位置和索引值
        this.touch.y1 = e.touches[0].pageY
        this.touch.archorIndex = parseInt(archorIndex)
        // 让元素滚到指定位置
        this._scrollTo(archorIndex)
      },
      onShortCutTouchMove(e) {
        // 记录触摸移动时的位置
        this.touch.y2 = e.touches[0].pageY
        // 计算两者之间的相差多少，并计算出有多少个li的高度
        let delta = Math.floor((this.touch.y2 - this.touch.y1) / SHORT_CUT_HEIGHT)
        let archorIndex = parseInt(this.touch.archorIndex) + delta
        this._scrollTo(archorIndex)
        // this._setCurrentStyle(archorIndex)
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      selectItem(item) {
        this.$emit('select', item)
      },
      _calculateHeight() {
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
        // console.log(this.listHeight)
      },
      _scrollTo(index) {
        // 边界限制设置
        if (!index && index !== 0) {
          return
        }
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        // 滚动到元素位置  触发滚动事件效果
        this.scrollY = -this.listHeight[index]
        console.log(this.scrollY, index)
        this.$refs.scroll.scrollToElement(this.$refs.listGroup[index], 0)
      },
      _currentStyle(index) {
        return this.currentIndex === index ? 'current' : ''
      },
      _setCurrentStyle(index) {
        this.currentIndex = index
      },
      iconTitle(title) {
        if (title.length > 1) {
          return title.substring(0, 1)
        } else {
          return title
        }
      }
    },
    watch: {
      listView() {
        // listView数据变化了  就重新渲染dom
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        if (newY > 0) {
          this.currentIndex = 0
          this.isFixedShow = false
          return
        }
        // 循环listHeight
        for (let i = 0; i < listHeight.length - 1; i++) {
          if (-newY >= listHeight[i + 1] - LIST_FIXED && -newY < listHeight[i + 1]) {
            let scroll_height = LIST_FIXED - listHeight[i + 1] - newY
            this.$refs.listFixed.style.transform = `translateY(-${scroll_height}px)`
          } else {
            this.$refs.listFixed.style.transform = `translateY(0px)`
          }
          if (-newY >= listHeight[i] && -newY < listHeight[i + 1]) {
            this.currentIndex = i
            this.isFixedShow = true
            return
          }
        }
        this.currentIndex = listHeight.length - 2
        // 如果滚动到距离第n个元素30px时
        this.isFixedShow = true
      }
    },
    name: 'list-view',
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" scoped>
  .listview
    .list-shortcut
      position: absolute
      z-index: 3
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: rgba(0, 0, 0, .3)
      font-family: Helvetica
      .item
        padding: 3px;
        line-height: 1;
        color: hsla(0, 0%, 100%, .5);
        font-size: 12px;
        &.current
          color #ffcd32

  .common_content
    position relative
    height 100%
    .list-group-wrapper
      .list-group
        padding-bottom 30px
        .list-group-title
          height: 30px;
          line-height: 30px;
          padding-left: 20px;
          font-size: 12px;
          color: hsla(0, 0%, 100%, .5);
          background: #333;
        .list-group-item
          display: flex;
          align-items: center;
          padding: 20px 0 0 30px;
          .avatar
            width: 50px;
            height: 50px;
            border-radius: 50%;
          .name
            margin-left: 20px;
            color: hsla(0, 0%, 100%, .5);
            font-size: 14px;
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        position absolute
        width 100%
        top 0
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        background: #333;


</style>
