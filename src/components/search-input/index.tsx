import React, { ChangeEvent, useState } from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchBookQueryParams, fetchBooks } from '../../store/slices/booksSlice'
import FilterOption from './filter-option'

const initialSearchFilter: fetchBookQueryParams = {
  title: '',
  minYear: 1900,
  maxYear: 2024,
  minPage: 0,
  maxPage: 10000,
  sortByTitle: ''
}

const SearchInput: React.FC = () => {
  const dispatch = useDispatch()
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

  return (
    <section className="flex items-center z-10 justify-center relative">
      <input
        type="text"
        name="title"
        placeholder="Search for Books"
        className="border border-gray-50 px-4 py-3 rounded-l-md focus:outline-none focus:border-blue-100 w-[75%]"
        value={searchBookParams.title}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="flex justify-center items-center bg-white text-blue-700 text-xl h-[50px] w-[46px]"
        onClick={toggleDropdown}
      >
        <FaFilter />
      </button>
      <button
        type="button"
        className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-xl rounded-r-md h-[50px] w-[46px]"
        onClick={handleSearchBook}
      >
        <FaSearch />
      </button>
      {searchFilterVisible && (
        <FilterOption
          searchBookParams={searchBookParams}
          handleInputChange={handleInputChange}
        />
      )}
    </section>
  )
}

export default SearchInput
