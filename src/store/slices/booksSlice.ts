import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchQueryParams } from '../../lib/interfaces'

export interface Book {
  id: number
  title: string
  description: string
  image_url: string
  release_year: number
  price: string
  total_page: number
  thickness: string
  Category?: {
    id: number
    name: string
  }
  category_id?: number
}

export interface BookState {
  books: { count: number; rows: Book[] }
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  searchBookParams: fetchQueryParams
}

interface CategoryBooksArgs {
  id: number
  params?: fetchQueryParams
}

export interface CreateBookArgs {
  title: string
  description: string
  image_url: string
  release_year: number | string
  price: string
  total_page: number | string
  category_id: number | string
}

interface EditBookArgs {
  bookId: number
  payload: CreateBookArgs
}

// Async action to fetch books
export const fetchBooks = createAsyncThunk<
  { count: number; rows: Book[] },
  fetchQueryParams | undefined
>('books/fetchBooks', async (params: fetchQueryParams | undefined) => {
  let url = `${process.env.API_BASE_URL}/books`

  if (params) {
    const queryString = new URLSearchParams(params as any).toString()
    url += `?${queryString}`
  }

  const response = await axios.get<{ count: number; rows: Book[] }>(url)
  return response.data
})

// Async action to fetch category books
export const fetchCategoryBooks = createAsyncThunk<
  {
    count: number
    rows: Book[]
  },
  CategoryBooksArgs
>('books/fetchCategoryBooks', async ({ id, params }: CategoryBooksArgs) => {
  let url = `${process.env.API_BASE_URL}/categories/${id}/books`

  if (params) {
    const queryString = new URLSearchParams(params as any).toString()
    url += `?${queryString}`
  }

  const response = await axios.get<{ count: number; rows: Book[] }>(url)

  return response.data
})

// Async action to create new book
export const createBook = createAsyncThunk<
  { message: string; data: Book },
  CreateBookArgs
>('books/createBook', async (bookPayload: CreateBookArgs) => {
  const response = await axios.post<{ message: string; data: Book }>(
    `${process.env.API_BASE_URL}/books`,
    bookPayload
  )
  return response.data
})

// Async action to edit a book
export const editBook = createAsyncThunk<
  { message: string; data: Book },
  EditBookArgs
>('books/editBook', async ({ bookId, payload }: EditBookArgs) => {
  const response = await axios.patch<{ message: string; data: Book }>(
    `${process.env.API_BASE_URL}/books/${bookId}`,
    payload
  )
  return response.data
})

// Async action to delete a book
export const deleteBook = createAsyncThunk<
  { message: string; data: Book },
  number
>('books/deleteBook', async (bookId: number) => {
  const response = await axios.delete<{ message: string; data: Book }>(
    `${process.env.API_BASE_URL}/books/${bookId}`
  )
  return response.data
})

// Books slice
const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: {
      count: 0,
      rows: []
    },
    status: 'idle',
    error: null,
    searchBookParams: {
      title: '',
      minYear: 1900,
      maxYear: 2024,
      minPage: 0,
      maxPage: 10000,
      sortByTitle: ''
    }
  } as BookState,
  reducers: {
    updateSearchBookParams(state, action: PayloadAction<fetchQueryParams>) {
      state.searchBookParams = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<{ count: number; rows: Book[] }>) => {
          state.status = 'succeeded'
          state.books = action.payload
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(fetchCategoryBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchCategoryBooks.fulfilled,
        (state, action: PayloadAction<{ count: number; rows: Book[] }>) => {
          state.status = 'succeeded'
          state.books = action.payload
        }
      )
      .addCase(fetchCategoryBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        createBook.fulfilled,
        (state, action: PayloadAction<{ message: string; data: Book }>) => {
          state.status = 'succeeded'
          state.books.rows.push(action.payload.data)
        }
      )
      .addCase(createBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(editBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        editBook.fulfilled,
        (state, action: PayloadAction<{ message: string; data: Book }>) => {
          state.status = 'succeeded'
          state.books.rows = state.books.rows.map((book) =>
            book.id === action.payload.data.id ? action.payload.data : book
          )
        }
      )
      .addCase(editBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        deleteBook.fulfilled,
        (state, action: PayloadAction<{ message: string; data: Book }>) => {
          state.status = 'succeeded'
          state.books.rows = state.books.rows.filter(
            (book) => book.id !== action.payload.data.id
          )
        }
      )
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown error'
      })
  }
})

export const { updateSearchBookParams } = bookSlice.actions

export default bookSlice.reducer
