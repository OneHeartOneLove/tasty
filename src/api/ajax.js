/*
ajax请求模块
返回值：promise对象（异步返回的数据是：response.data）
 */

import axios from 'axios'

// 数据data默认是对象格式，请求类型默认GET
export default function ajax (url, data={}, type='GET') {
  // 用Promise包裹，使用resolve(response.data)函数返回的是data数据
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备url query参数数据
      // 将data里面的数据拼接到url里面
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).focus(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        // substring() 方法用于提取字符串中介于两个指定下标之间的字符
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    }else {
      //发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      // 成功了调用resolve()
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject()
      reject(error)
    })
  })
}
