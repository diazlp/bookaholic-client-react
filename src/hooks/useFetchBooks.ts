import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { BookState, Book, fetchBooks } from '../store/slices/booksSlice'

interface useFetchBooksResult extends Omit<BookState, 'books'> {
  books: Book[]
}

const useFetchBooks = (): useFetchBooksResult => {
  const dispatch: AppDispatch = useDispatch()
  const { books, status, error } = useSelector(
    (state: RootState) => state.books
  )

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  return {
    books: books.rows,
    status,
    error
  }
}

export default useFetchBooks
