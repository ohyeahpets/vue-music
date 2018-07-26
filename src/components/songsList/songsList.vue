<template>
  <div class="list">
    <div class="songs-list-wrapper">
      <div class="songs-list">
        <ul>
          <li class="item">
            <div class="content">
              <h2 class="name">等你下课(with 杨瑞代)</h2>
              <p class="desc">周杰伦·等你下课</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'songs-list'
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"
  .list
    .songs-list-wrapper
      padding: 20px 30px
      .songs-list
        .item
          display flex
          align-items center
          height 64px
          font-size $font-size-medium
          .content
            width 100%
            line-height 20px
            overflow hidden
            .name
              margin-bottom 4px
              color #fff
            .desc
              color: hsla(0,0%,100%,.3)
              no-wrap()


</style>
