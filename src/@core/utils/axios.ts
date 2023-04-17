import axios from 'axios'
import envConfig from 'src/configs/envConfig'

export const axiosInstance = axios.create({
  baseURL: envConfig.apiBaseUrl,
  timeout: 4000
})

axiosInstance.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('access-token')
  if (token && config && config.headers) {
    config.headers.Authorization = token
  }
  return config
})
