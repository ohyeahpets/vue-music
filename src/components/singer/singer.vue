<template>
  <div class="common_wrapper singer">
    <Scroll class="common_content">
      <ul class="list-group-wrapper">
        <li class="list-group" v-for="i of singers">
          <h2 class="list-group-title">{{i.title}}</h2>
          <ul>
            <li class="list-group-item" v-for="item in i.items">
              <img class="avatar"
                   :src="item.avatar" alt="">
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'
  import Scroll from 'base/scroll/scroll'

  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10
  export default {
    name: 'singer',
    data() {
      return {
        singers: {}
      }
    },
    components: {
      Scroll
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list)
            console.log(this.singers)
          }
        }).catch((e) => {
          console.log(e)
        })
      },
      _normalizeSinger(singerList) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        singerList.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          const key = item.Findex
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        return map
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .common_wrapper
    position fixed
    top 88px
    width 100%
    bottom 0
    left 0
    right 0
    .common_content
      height 100%

  .singer
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
</style>
