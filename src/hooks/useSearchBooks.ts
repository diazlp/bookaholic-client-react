import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { fetchBookQueryParams, fetchBooks } from '../store/slices/booksSlice'

const initialSearchFilter: fetchBookQueryParams = {
  title: '',
  minYear: 1900,
  maxYear: 2024,
  minPage: 0,
  maxPage: 10000,
  sortByTitle: ''
}

interface useSearchBooksResult {
  searchFilterVisible: boolean
  searchBookParams: fetchBookQueryParams
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
  handleKeyDown: (e: React.KeyboardEvent) => void
  handleSearchBook: () => void
  toggleDropdown: () => void
}

const useSearchBooks = (): useSearchBooksResult => {
  const dispatch: AppDispatch = useDispatch()
  const [searchFilterVisible, setSearchFilterVisible] = useState<boolean>(false)
  const [searchBookParams, setSearchBookParams] =
    useState<fetchBookQueryParams>(initialSearchFilter)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchBookParams((prevParams) => ({
      ...prevParams,
      [e.target.name]: e.target.value
    }))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(fetchBooks(searchBookParams) as any)
      setSearchFilterVisible(false)
    }
  }

  const handleSearchBook = () => {
    dispatch(fetchBooks(searchBookParams) as any)
    setSearchFilterVisible(false)
  }

  const toggleDropdown = () => {
    setSearchFilterVisible(!searchFilterVisible)
  }

  return {
    searchFilterVisible,
    searchBookParams,
    handleInputChange,
    handleKeyDown,
    handleSearchBook,
    toggleDropdown
  }
}

export default useSearchBooks
