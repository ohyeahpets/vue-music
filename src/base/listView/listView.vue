<template>
  <Scroll class="common_content listview" :data="listView" :listenScroll="true" @scroll="">
    <ul class="list-group-wrapper">
      <li class="list-group" v-for="i of listView">
        <h2 class="list-group-title">{{i.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="item in i.items">
            <img class="avatar"
                 v-lazy="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li class="item" v-for="item in listView">{{iconTitle(item.title)}}</li>
      </ul>
    </div>
    <div class="list-fixed">
      <div class="fixed-title">热门</div>
    </div>
  </Scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'

  export default {
    props: {
      listView: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    methods: {
      iconTitle(title) {
        return title.substring(0, 1)
      }
    },
    name: 'list-view',
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" scoped>
  .listview
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: rgba(0, 0, 0, .3)
      font-family: Helvetica
      .item
        padding: 3px;
        line-height: 1;
        color: hsla(0, 0%, 100%, .5);
        font-size: 12px;

  .common_content
    position relative
    height 100%
    .list-group-wrapper
      .list-group
        padding-bottom 30px
        .list-group-title
          height: 30px;
          line-height: 30px;
          padding-left: 20px;
          font-size: 12px;
          color: hsla(0, 0%, 100%, .5);
          background: #333;
        .list-group-item
          display: flex;
          align-items: center;
          padding: 20px 0 0 30px;
          .avatar
            width: 50px;
            height: 50px;
            border-radius: 50%;
          .name
            margin-left: 20px;
            color: hsla(0, 0%, 100%, .5);
            font-size: 14px;
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        position absolute
        width 100%
        top 0
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        background: #333;


</style>
