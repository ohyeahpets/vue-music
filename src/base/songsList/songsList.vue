<template>
  <div class="songs-list-wrapper">
    <div class="songs-list">
      <ul>
        <li class="item" v-for="(item,index) in songsList" v-if="songsList.length>0" @click="selectItem(item,index)">
          <div class="rank" v-show="isShowRank">
            <span class="icon" :class="_rankThree(index)" v-if="index>=0&&index<=2"></span>
            <span class="text" v-else>{{index + 1}}</span>
          </div>
          <div class="content">
            <h2 class="name">{{item.name}}</h2>
            <p class="desc">{{item.singer}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
    methods: {
      _rankThree(i) {
        return `icon${i}`
      },
      selectItem(item, index) {
        this.$emit('select', item, index)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
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
