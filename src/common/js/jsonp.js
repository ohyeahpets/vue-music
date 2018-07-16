import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  // 处理url存在问号的问题,并拼接新的字符串
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    // resolve代表promise成功 reject则代表失败
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 添加字符串到域名之后
// function handleUrl(str, obj) {
//   Object.keys(obj).forEach((key) => {
//     str += `&${key}=${encodeURIComponent(obj[key])}`
//   })
//   // 替换第一个&字符
//   str = str.replace(/&/, '?')
//   return str
// }

function param(data) {
  let url = ''
  // 遍历数据 拼接字符串返回
  for (var k in data) {
    url += `&${k}=${encodeURIComponent(data[k])}`
  }
  // 去掉第一个字符& 方便拼接
  return url ? url.substring(1) : ''
}
