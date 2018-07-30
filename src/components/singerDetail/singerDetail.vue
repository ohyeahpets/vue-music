<template>
  <transition name="slide-fade">
    <MusicList :songsList="songsList"></MusicList>
  </transition>
</template>

<script>
  import MusicList from 'components/musicList/musicList'
  import {mapGetters} from 'vuex'
  import {getSingerData} from 'api/singer'
  import {createSongs} from 'common/js/song'

  export default {
    name: 'singer-detail',
    components: {
      MusicList
    },
    data() {
      return {
        songsList: []
      }
    },
    computed: {
      ...mapGetters(['singer'])
    },
    created() {
      this._getSingerData()
    },
    methods: {
      _getSingerData() {
        getSingerData(this.singer.id).then((res) => {
          if (res.code === 0) {
            this.songsList = this._normalizeList(res.data.list)
//            console.log(this.songsList)
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      _normalizeList(list) {
        let res = []
        list.forEach((item) => {
          res.push(createSongs(item.musicData))
        })
        return res
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .slide-fade-enter-active, .slide-fade-leave-active
    transition: all .3s ease

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(100%)
</style>
