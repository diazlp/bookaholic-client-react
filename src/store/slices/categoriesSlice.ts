import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface Category {
  id: number
  name: string
  created_at: Date | string
  updated_at: Date | string
}

export interface CategoriesState {
  categories: { count: number; rows: Category[] }
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

// Async action to fetch categories
export const fetchCategories = createAsyncThunk<{
  count: number
  rows: Category[]
}>('categories/fetchCategories', async () => {
  const response = await axios.get<{ count: number; rows: Category[] }>(
    `${process.env.API_BASE_URL}/categories`
  )
  return response.data
})

// Categories slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: {
      count: 0,
      rows: []
    },
    status: 'idle',
    error: null
  } as CategoriesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<{ count: number; rows: Category[] }>) => {
          state.status = 'succeeded'
          state.categories = action.payload
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
  }
})

export default categoriesSlice.reducer
