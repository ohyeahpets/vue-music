<template>
  <div class="songs_wrapper">
    <div class="back" @click="jumpBack"><i class="icon-back"></i></div>
    <h1 class="title">{{singer.name}}</h1>
    <div class="bg-image" ref="bgImage">
      <div class="play-wrapper">
        <div class="play"><i class="icon-play"></i> <span class="text">随机播放全部</span></div>
      </div>
      <div class="filter"></div>
    </div>
    <Scroll class="list" ref="list">
      <SongsList :songsList="songsList"></SongsList>
      <Loading v-show="!songsList.length>0"></Loading>
    </Scroll>
  </div>
</template>

<script>
  import SongsList from 'base/songsList/songsList'
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import {mapGetters} from 'vuex'

  export default {
    name: 'music-list',
    props: {
      songsList: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    components: {
      Scroll,
      Loading,
      SongsList
    },
    computed: {
      ...mapGetters(['singer'])
    },
    created() {
      if (!this.singer.id) {
        this.$router.back()
      }
      this.listenScroll = true
    },
    methods: {
      jumpBack() {
        this.$router.back()
      },
      getWindowWidth() {
        return document.body.clientWidth || window.innerWidth
      }
    },
    mounted() {
      this.$refs.bgImage.style.background = `url(${this.singer.avatar}) no-repeat`
      this.$refs.bgImage.style.backgroundSize = 'cover'
      // this.$refs.bgImage.style.transform = `scale()`
      this.$refs.list.$el.style.top = 0.7 * this.getWindowWidth() + 'px'
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .songs_wrapper
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    width 100%
    height 100%
    background $color-background
    z-index 3
    .back
      position: absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block;
        padding: 10px;
        font-size: 22px;
        color: $color-theme;
    .title
      position: absolute
      top: 0
      left: 10%
      z-index: 40
      width: 80%
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
      text-align: center
      line-height: 40px
      font-size: 18px
      color: #fff
    .bg-image
      position relative
      width 100%
      padding-bottom 70%
      height 0
      top 0
      background-size cover
      transform-origin top
      .play-wrapper
        position: absolute
        bottom: 20px
        z-index: 50
        width: 100%
        .play
          box-sizing: border-box
          width: 135px
          padding: 7px 0
          margin: 0 auto
          text-align: center
          border: 1px solid $color-theme
          color: $color-theme
          border-radius: 100px
          font-size: 0
          .icon-play
            display: inline-block
            vertical-align: middle
            margin-right: 6px
            font-size 16px
          .text
            display inline-block
            vertical-align: middle
            font-size 12px
      .filter
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background rgba(7, 17, 27, .4)
    .list
      width 100%
      position absolute
      bottom 0
      left 0
      right 0
</style>
