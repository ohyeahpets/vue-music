<template>
  <div class="common_wrapper singer">
    <listView :listView="singers"></listView>
  </div>
</template>

<script>
  import listView from 'base/listView/listView'
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer'

  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10
  // const FIXED_TITLE_HEIGHT = 30
  export default {
    name: 'singer',
    data() {
      return {
        singers: []
      }
    },
    components: {
      listView
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
        // 将对象转化成有序数组，方便操作
        let arr = []
        let newMap = Object.keys(map).sort()
        newMap.forEach((item, index) => {
          arr.push(map[item])
        })
        let hot = arr.pop()
        arr = arr.splice(1)
        arr.unshift(hot)
        return arr
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
</style>
