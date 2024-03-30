import React from 'react'
import { FaSearch, FaFilter } from 'react-icons/fa'

const SearchInput: React.FC = () => {
  return (
    <form className="flex items-center z-10 justify-center">
      <input
        type="text"
        placeholder="Search for Books"
        className="border border-gray-50 px-4 py-3 rounded-l-md focus:outline-none focus:border-blue-100 w-[75%]"
      />
      <button
        className="flex justify-center items-center bg-white text-blue-700 text-xl h-[50px] w-[46px]"
        type="button"
      >
        <FaFilter />
      </button>
      <button
        className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-xl rounded-r-md h-[50px] w-[46px]"
        type="button"
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchInput
