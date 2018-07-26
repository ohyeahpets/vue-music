<template>
  <div class="cHeader_wrapper">
    <div class="cHeader_f">
      <div class="cHeader">
        <div class="icon"></div>
        <h1 class="text">Chicken Music</h1>
        <div class="mine">
          <i class="icon-mine"></i>
        </div>
      </div>
      <div class="tab clearfix">
        <router-link to="/recommend" class="tab_link"><span class="tab_text">推荐</span></router-link>
        <router-link to="/singer" class="tab_link"><span class="tab_text">歌手</span></router-link>
        <router-link to="/rank" class="tab_link"><span class="tab_text">排行</span></router-link>
        <router-link to="/search" class="tab_link"><span class="tab_text">搜索</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'commonHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .cHeader_wrapper
    position: fixed
    top: 0
    left: 0
    height: 88px
    width: 100%
    .cHeader_f
      position fixed
      width 100%
      height inherit
      z-index 2
      background $color-background
      .cHeader
        height 44px
        text-align center
        .icon
          display inline-block
          vertical-align top
          height 32px
          width 30px
          margin-top 6px
          margin-right 9px
          bg-image('./logo')
          background-size 30px 32px
        .text
          display inline-block
          font-size 18px
          line-height 44px
        .mine
          font-size 20px
          padding 12px
          color $color-theme
          position absolute
          top 0
          right 0
      .tab
        text-align center
        height 44px
        line-height 44px
        .tab_link
          display block
          float left
          width 25%
          box-sizing border-box
          font-size $font-size-medium
          &.router-link-active
            .tab_text
              color $color-theme
              border-bottom 2px solid $color-theme
          .tab_text
            padding: 5px;
            display inline-block
            padding-bottom 5px
            color hsla(0, 0%, 100%, .5)
            font-size $font-size-medium
            line-height: 1;
</style>
