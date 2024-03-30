// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store