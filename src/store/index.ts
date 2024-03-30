import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlice'
import booksReducer from './slices/booksSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
