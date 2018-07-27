<template>
  <Scroll class="list" ref="list">
    <div class="songs-list-wrapper">
      <div class="songs-list">
        <ul>
          <li class="item" v-for="(item,index) in songsList" v-if="songsList.length>0">
            <div class="rank" v-show="isShowRank">
              <span class="icon" :class="_rankThree(index)" v-if="index>=0&&index<=2"></span>
              <span class="text" v-else>{{index+1}}</span>
            </div>
            <div class="content">
              <h2 class="name">{{item.name}}</h2>
              <p class="desc">{{item.singer}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Loading v-show="!songsList.length>0"></Loading>
  </Scroll>
</template>

<script>
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'

  export default {
    name: 'songs-list',
    props: {
      songsList: {
        type: Array,
        default: []
      },
      isShowRank: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Scroll,
      Loading
    },
    methods: {
      getWindowWidth() {
        return document.body.clientWidth || window.innerWidth
      },
      _rankThree(i) {
        return `icon${i}`
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.list.$el.style.top = 0.7 * this.getWindowWidth() + 'px'
      }, 20)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .list
    width 100%
    position absolute
    bottom 0
    left 0
    right 0
    overflow hidden
    .songs-list-wrapper
      padding: 20px 30px
      .songs-list
        .item
          display flex
          align-items center
          height 64px
          font-size $font-size-medium
          .rank
            flex: 0 0 25px
            width 25px
            margin-right 30px
            text-align center
            .text
              font-size: 18px
              color $color-theme
            .icon
              display inline-block
              width 25px
              height 24px
              background-size 25px 24px
              &.icon0
                bg-image('first')
              &.icon1
                bg-image('second')
              &.icon2
                bg-image('third')
          .content
            width 100%
            line-height 20px
            overflow hidden
            .name
              margin-bottom 4px
              color #fff
              no-wrap()
            .desc
              color: hsla(0, 0%, 100%, .3)
              no-wrap()


</style>
