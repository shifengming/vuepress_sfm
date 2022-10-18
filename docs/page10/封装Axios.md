# 封装Axios

```js
import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL = '/api'
// 设置请求超时时间
axios.defaults.timeout = 2000
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前可以做的...
    return config
  },
  (err) => {
    // 请求发生错误可以做的...
    return Promise.reject(err)
  }
)

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    // 对响应数据可以做的...
    return response
  },
  (err) => {
    // 响应发生错误可以做的...
    return Promise.reject(err)
  }
)

// 封装get方法
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

// 封装post方法
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

// 序列化post请求参数
export function qsPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, Qs.stringify(params))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

// 封装put方法
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

// 封装delete方法
export function del(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
```
