<template>
  <div class="progress-bar" ref="progressBar">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtnWrapper">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
  const MINI_CIRCLE = 16
  export default {
    name: 'progress-bar',
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    watch: {
      percent(newPercent) {
        setTimeout(() => {
          let w = this.$refs.progressBar.clientWidth - MINI_CIRCLE
          this.$refs.progressBtnWrapper.style.transform = `translate3d(${w * newPercent}px,0,0)`
          this.$refs.progress.style.width = `${w * newPercent}px`
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  .progress-bar
    height 100%
    .bar-inner
      position relative
      top 13px
      height 4px
      background rgba(0, 0, 0, .3)
      .progress
        width 0
        height 100%
        background $color-theme
      .progress-btn-wrapper
        position absolute
        width 30px
        height 30px
        left -7px
        top -13px
        .progress-btn
          position relative
          top 7px
          left 7px
          width 16px
          height 16px
          border-radius 50%
          border 3px solid #fff
          background $color-theme
          box-sizing border-box
</style>
