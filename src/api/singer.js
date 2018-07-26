import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

/* *
 * 歌手列表接口
 * */
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    g_tk: 1664029744
  })
  return jsonp(url, data, options)
}

/* *
 * 歌曲列表接口
 * */
export function getSingerData(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    order: 'listen',
    begin: 0,
    num: 100,
    singermid: singerId,
    songstatus: 1
  })
  return jsonp(url, data, options)
}

