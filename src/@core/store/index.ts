import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import profileReducer from 'src/modules/account-settings/slices'

const persistConfig = {
  key: 'root',
  storage
}

const reducers = combineReducers({
  profile: profileReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export function configureAppStore(preloadedState?: PreloadedState<RootState>) {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState
  })

  return store
}

const store = configureAppStore()

export type RootState = ReturnType<typeof persistedReducer>
export type AppStore = ReturnType<typeof configureAppStore>
export type StoreDispatch = AppStore['dispatch']

export default store
