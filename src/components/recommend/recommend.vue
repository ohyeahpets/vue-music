<template>
  <div class="common_wrapper">
    <CommonHeader></CommonHeader>
    <Carousel></Carousel>
    <div class="recommend_list">
      <h3 class="list-title">热门歌单推荐</h3>
      <ul>
        <li class="item">
          <div class="avatar">
            <img src="" alt="">
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import CommonHeader from 'components/commonHeader/commonHeader'
  import Carousel from 'base/carousel/carousel'
  // import {getRecommend} from 'api/recommend'

  export default {
    name: 'recommend',
    components: {
      CommonHeader,
      Carousel
    },
    created() {
      // getRecommend()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  .recommend_list
    .list-title
      color $color-theme
      line-height 65px
      text-align center
      font-size $font-size-medium
    .item
      padding 0 20px 20px
      .avatar
        width 60px
        height 60px
        img
          width 100%
</style>
