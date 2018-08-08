<template>
  <div class="player" v-show="playList.length>0">
    <transition name="nplayer">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img width="100%" height="100%"
               :src="currentSong.image" alt="">
        </div>
        <transition name="fadeTop">
          <div class="top" v-show="fullScreen">
            <div class="back" @click="closePlayer">
              <i class="icon-back"></i>
            </div>
            <div class="name">{{currentSong.name}}</div>
            <div class="singerName">{{currentSong.singer}}</div>
          </div>
        </transition>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper">
              <div class="cd">
                <img class="image"
                     :src="currentSong.image" alt="">
              </div>
            </div>
            <div class="playing-lyric-wrapper">
              <div class="playing-lyric">lyric</div>
            </div>
          </div>
        </div>
        <transition name="fadeBottom">
          <div class="bottom" v-show="fullScreen">
            <div class="operators">
              <div class="icon i-left">
                <i class="icon-sequence"></i>
              </div>
              <div class="icon i-left">
                <i class="icon-prev"></i>
              </div>
              <div class="icon i-center">
                <i class="icon-pause" :class="playingCls" @click="togglePlay"></i>
              </div>
              <div class="icon i-right">
                <i class="icon-next"></i>
              </div>
              <div class="icon i-right">
                <i class="icon-not-favorite"></i>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <transition name="mplayer">
      <div class="mini-player" v-show="!fullScreen" @click="openPlayer">
        <div class="icon">
          <div class="imgWrapper">
            <img :src="currentSong.image" alt="">
          </div>
        </div>
        <div class="text">
          <h3 class="name">{{currentSong.name}}</h3>
          <p class="desc">{{currentSong.singer}}</p>
        </div>
        <div class="control">
          <i class="icon-play-mini" :class="miniPlayingCls" @click.stop="togglePlay"></i>
        </div>
        <div class="control">
          <i class="icon-playlist"></i>
        </div>
      </div>
    </transition>
    <audio :src="currentSong.url" ref="audio" autoplay></audio>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['playList', 'playingState', 'fullScreen', 'currentSong']),
      playingCls() {
        return this.playingState ? 'icon-pause' : 'icon-play'
      },
      miniPlayingCls() {
        return this.playingState ? 'icon-pause' : 'icon-play'
      }
    },
    methods: {
      ...mapMutations({setFullScreen: 'SET_FULL_SCREEN', setPlayingState: 'SET_PLAYING_STATE'}),
      closePlayer() {
        this.setFullScreen(false)
      },
      openPlayer() {
        this.setFullScreen(true)
      },
      togglePlay() {
        this.setPlayingState(!this.playingState)
      }
    },
    watch: {
      playingState(state) {
        setTimeout(() => {
          state ? this.$refs.audio.play() : this.$refs.audio.pause()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .fadeBottom-enter-active, .fadeBottom-leave-active
    transition all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .fadeBottom-enter, .fadeBottom-leave-to
    transform translateY(40px)
    opacity 0

  .fadeTop-enter-active, .fadeTop-leave-active
    transition all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .fadeTop-enter, .fadeTop-leave-to
    transform translateY(-60px)
    opacity 0

  .nplayer-enter-active, .nplayer-leave-active, .mplayer-enter-active, .mplayer-leave-active
    transition all 0.5s

  .nplayer-enter, .nplayer-leave-to, .mplayer-enter, .mplayer-leave-to
    opacity 0

  .player
    .normal-player
      position fixed
      top 0
      bottom 0
      left 0
      right 0
      width 100%
      height 100%
      background #333
      z-index 150
      .background
        position absolute
        top 0
        left 0
        bottom 0
        width 100%
        height 100%
        z-index -1
        opacity .6
        filter blur(20px)
      .top
        position: relative
        margin-bottom: 25px
        color #fff
        text-align center
        .back
          position absolute
          top 0
          left 6px
          z-index 50
          .icon-back
            display block
            padding 9px
            font-size 22px
            color $color-theme
            transform rotate(-90deg)
        .name
          width 80%
          margin 0 auto
          line-height 40px
          font-size $font-size-large
        .singerName
          font-size $font-size-medium
          line-height 20px
      .middle
        position fixed
        width 100%
        top 85px
        .middle-l
          position relative
          width 100%
          height 0
          padding-top 80%
          .cd-wrapper
            position absolute
            top 0
            width 80%
            left 10%
            height 100%
            box-sizing border-box
            .cd
              border-radius 50%
              width 100%
              height 100%
              .image
                position absolute
                width 100%
                height 100%
                box-sizing border-box
                border 10px solid hsla(0, 0%, 100%, .1)
                border-radius 50%
          .playing-lyric-wrapper
            width 80%
            margin 30px auto 0
            text-align center
            overflow hidden
            .playing-lyric
              line-height 20px
              font-size $font-size-medium
              color hsla(0, 0%, 100%, .5)

      .bottom
        position absolute
        bottom 50px
        width 100%
        .operators
          display flex
          align-items center
          .icon
            flex 1
            color $color-theme
            &.i-left
              text-align right
            &.i-right
              text-align left
            &.i-center
              text-align center
              padding 0 20px
              i
                font-size 40px
            i
              font-size 30px
    .mini-player
      display flex
      align-items center
      width 100%
      position fixed
      bottom 0
      height 60px
      z-index 180
      background $color-highlight-background
      .icon
        flex: 0 0 40px
        width 40px
        height 40px
        padding 0 10px 0 20px
        .imgWrapper
          width 100%
          height 100%
          img
            width 100%
            border-radius 50%
      .text
        flex 1
        .name
          font-size $font-size-medium
          color #fff
          margin-bottom 2px
          line-height 20px
          no-wrap()
        .desc
          font-size $font-size-small
          line-height 20px
          color $color-text-d
      .control
        flex: 0 0 30px;
        width: 30px;
        padding: 0 10px;
        .icon-play-mini
          font-size 32px
        .icon-playlist
          font-size: 30px
          color: rgba(255, 205, 49, .5)
</style>
