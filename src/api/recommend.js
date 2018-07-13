// import jsonp from 'jsonp'
import {commonParams} from './config'
import axios from 'axios'

// const debug = process.env.NODE_ENV !== 'production'

// qq音乐轮播数据
export function getRecommend() {
  const url = '/api/carousel'

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    format: 'json',
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    _: 1531469606781
  })
  axios.get(handleUrl(url, data)).then((res) => {
    // 此处api有验证，无法跨域
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}

// 添加字符串到域名之后

function handleUrl(str, obj) {
  Object.keys(obj).forEach((key) => {
    str += `&${key}=${encodeURIComponent(obj[key])}`
  })
  // 替换第一个&字符
  str = str.replace(/&/, '?')
  return str
}

// 歌单列表

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId:1
  })
}
