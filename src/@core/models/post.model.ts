import BaseModel from './_base.model'

interface Post extends BaseModel {
  avatar: string
  content: string
  createdAt: string
  like: number
  name: string
}

export default Post
