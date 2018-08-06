export const singer = state => state.singer

export const playList = state => state.playList

export const sequenceList = state => state.sequenceList

export const playingState = state => state.playingState

export const playingMode = state => state.playingMode

export const fullScreen = state => state.fullScreen

export const duration = state => state.duration

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
