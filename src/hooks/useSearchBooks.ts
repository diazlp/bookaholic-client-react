import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { fetchBooks, updateSearchBookParams } from '../store/slices/booksSlice'
import { fetchQueryParams } from '../lib/interfaces'

const initialSearchFilter: fetchQueryParams = {
  title: '',
  minYear: 1900,
  maxYear: 2024,
  minPage: 0,
  maxPage: 10000,
  sortByTitle: ''
}

interface useSearchBooksResult {
  searchFilterVisible: boolean
  searchBookParams: fetchQueryParams
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
    useState<fetchQueryParams>(initialSearchFilter)

  useEffect(() => {
    dispatch(updateSearchBookParams(searchBookParams))
  }, [searchBookParams, dispatch])

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
      dispatch(fetchBooks(searchBookParams))
      setSearchFilterVisible(false)
    }
  }

  const handleSearchBook = () => {
    dispatch(fetchBooks(searchBookParams))
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
