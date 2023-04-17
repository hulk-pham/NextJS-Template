import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import User from 'src/@core/models/user.model'
import type { RootState } from 'src/@core/store'

interface ProfileState {
  user: User | null
}

const initialState: ProfileState = {
  user: null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    }
  }
})

const { setUser } = profileSlice.actions
export const userActions = { setUser }

const selectUser = (state: RootState) => state.profile.user
export const userSelector = { selectUser }
const profileReducer = profileSlice.reducer

export default profileReducer
