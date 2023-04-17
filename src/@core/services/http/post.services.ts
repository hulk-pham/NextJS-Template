import { axiosInstance } from 'src/@core/utils/axios'

const postService = {
  list: () => {
    return axiosInstance.get('/posts')
  }
}

export default postService
