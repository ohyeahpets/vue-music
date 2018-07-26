<template>
  <transition name="slide-fade">
    <div class="songs_wrapper">
      <div class="back" @click="jumpBack"><i class="icon-back"></i></div>
      <h1 class="title">{{singerData.name}}</h1>
      <div class="bg-image" ref="bgImage">
        <div class="play-wrapper">
          <div class="play"><i class="icon-play"></i> <span class="text">随机播放全部</span></div>
        </div>
        <div class="filter"></div>
      </div>
      <SongsList></SongsList>
    </div>
  </transition>
</template>

<script>
  import SongsList from 'components/songsList/songsList'
  import {mapGetters} from 'vuex'

  export default {
    name: 'singer-detail',
    components: {
      SongsList
    },
    data() {
      return {
        singerData: {}
      }
    },
    computed: {
      ...mapGetters(['singer'])
    },
    created() {
      if (!this.singer.id) {
        this.$router.back()
      }
      this.singerData = this.singer
    },
    mounted() {
      this.$refs.bgImage.style.background = `url(${this.singerData.avatar}) no-repeat`
      this.$refs.bgImage.style.backgroundSize = 'cover'
    },
    methods: {
      jumpBack() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active, .slide-fade-leave-active
    transition: all .3s ease

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(100%)

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
</style>
