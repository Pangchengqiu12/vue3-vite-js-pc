import axios from 'axios'
const pendingRequests = {}
let requestKey = null
let request = axios.create({
  baseURL: 'https://lhhcrm.asrobot.cn/',
  timeout: 5000,
})
let maxCount = 2
request.interceptors.request.use(
  (config) => {
    console.log(config)
    if (config.method === 'get' || config.method === 'delete') {
      config.params = config.data
    }
    config.headers['Authorization'] = 'Bearer 46f441257cd848869cdb9818de12a9c9'
    requestKey = config.method + config.url + JSON.stringify(config.params || {})
    if (pendingRequests[requestKey]) {
      // 如果请求已经存在，则取消请求
      config.cancelToken = new axios.CancelToken((cancel) => {
        cancel('请求已取消')
      })
    } else {
      // 如果请求不存在，则将其添加到 pendingRequests 中
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
request.interceptors.response.use(
  (response) => {
    pendingRequests[requestKey] = true
    return response
  },
  (error) => {
    console.log(error, 'error')
    maxCount <= 0 || pendingRequests[requestKey] ? Promise.reject(error) : (request(error.config), (maxCount -= 1))
  },
  // maxCount <= 0 ? Promise.reject(error) : request(opt, maxCount - 1)
)
export default request
