import { axiosInstance } from 'src/@core/utils/axios'

const userService = {
  list: () => {
    return axiosInstance.get('/users')
  }
}

export default userService
