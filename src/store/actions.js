import {playListMode} from 'common/js/config'
import * as type from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(type.SET_PLAYING_LIST, list)
  commit(type.SET_SEQUENCE_LIST, list)
  commit(type.SET_PLAYING_STATE, true)
  commit(type.SET_PLAYING_MODE, playListMode.sequence)
  commit(type.SET_FULL_SCREEN, true)
  commit(type.SET_CURRENT_INDEX, index)
}
