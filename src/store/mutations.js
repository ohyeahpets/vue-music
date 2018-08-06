import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_LIST](state, list) {
    state.playingList = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAYING_STATE](state, tag) {
    state.playingState = tag
  },
  [types.SET_PLAYING_MODE](state, playingMode) {
    state.playingMode = playingMode
  },
  [types.SET_FULL_SCREEN](state, tag) {
    state.fullScreen = tag
  },
  [types.SET_DURATION](state, duration) {
    state.duration = duration
  },
  [types.SET_CURRENT_INDEX](state, currentIndex) {
    state.currentIndex = currentIndex
  }
}

export default mutations
