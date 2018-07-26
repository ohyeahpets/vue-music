<template>
  <div class="common_wrapper">
    <Scroll class="common_content" :data="discList">
      <div>
        <Carousel :carouselData="carouselData"></Carousel>
        <div class="recommend_list">
          <h3 class="list-title">热门歌单推荐</h3>
          <ul>
            <li v-for="item in discList" class="item" :key="item.dissid">
              <div class="avatar">
                <img v-lazy="item.imgurl"
                     alt="">
              </div>
              <div class="detail">
                <h2 class="name">{{item.creator.name}}</h2>
                <p class="desc">{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
    <loading v-show="!discList"></loading>
  </div>
</template>

<script>
  import Carousel from 'base/carousel/carousel'
  import loading from 'base/loading/loading'
  import {getRecommend, getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import Scroll from 'base/scroll/scroll'

  export default {
    name: 'recommend',
    data() {
      return {
        carouselData: [],
        discList: []
      }
    },
    components: {
      Carousel,
      Scroll,
      loading
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.carouselData = res.data.slider
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            // console.log(res.data.list)
            this.discList = res.data.list
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  .common_wrapper
    position fixed
    top 88px
    width 100%
    bottom 0
    left 0
    right 0
    overflow hidden
    .common_content
      height 100%

  .recommend_list
    .list-title
      color $color-theme
      line-height 65px
      text-align center
      font-size $font-size-medium
    .item
      padding 0 20px 20px
      display flex
      align-items center
      justify-content space-between
      .avatar
        width 60px
        height 60px
        img
          width 100%
      .detail
        font-size 13px
        flex 1
        padding-left 20px
        .name
          color #fff
          margin-bottom 16px
        .desc
          color hsla(0, 0%, 100%, .3)
</style>
