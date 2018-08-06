import {playListMode} from 'common/js/config'

const state = {
  singer: {}, // 歌手对象
  playList: [],
  sequenceList: [],
  playingState: false,
  playingMode: playListMode.sequence,
  fullScreen: false,
  duration: 0,
  currentIndex: -1
}

export default state
