import BaseModel from './_base.model'

interface User extends BaseModel {
  firstName: string
  lastName: string
  avatar: string
  address: string
  createdAt: string
  phone: number
}

export default User
