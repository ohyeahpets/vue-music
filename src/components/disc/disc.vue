<template>
  <transition name="slide-fade">
    <MusicList></MusicList>
  </transition>
</template>

<script>
  import MusicList from 'components/musicList/musicList'
//  import {getCdInfo} from 'api/recommend'
//  import {mapGetters} from 'vuex'
//  import {createSongs} from 'common/js/song'

  export default {
    name: 'disc',
    components: {
      MusicList
    },
    data() {
      return {
        songsList: []
      }
    },
    created() {
//      this._getCdInfo()
    },
    methods: {
//      _getCdInfo(dissid) {
//        getCdInfo(dissid).then((res) => {
//          this.cdList = res.cdlist[0]
//          console.log(this.cdList)
//        }).catch((err) => {
//          console.log(err)
//        })
//      }
    }
  }
</script>

<style lang="stylus" scoped>
  .slide-fade-enter-active, .slide-fade-leave-active
    transition: all .3s ease

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(100%)
</style>
