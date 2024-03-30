import React from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'
import FilterOption from './filter-option'
import useSearchBooks from '../../hooks/useSearchBooks'

const SearchInput: React.FC = () => {
  const {
    searchFilterVisible,
    searchBookParams,
    handleInputChange,
    handleKeyDown,
    handleSearchBook,
    toggleDropdown
  } = useSearchBooks()

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
