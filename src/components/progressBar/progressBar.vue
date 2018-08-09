<template>
  <div class="progress-bar">
    <div class="bar-inner">
      <div class="progress"></div>
      <div class="progress-btn-wrapper">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'progress-bar'
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
