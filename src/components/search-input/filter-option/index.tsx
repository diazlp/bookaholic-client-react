import React, { ChangeEvent } from 'react'
import { fetchBookQueryParams } from '../../../store/slices/booksSlice'

type FilterOptionProps = {
  searchBookParams: fetchBookQueryParams
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

const FilterOption: React.FC<FilterOptionProps> = ({
  searchBookParams,
  handleInputChange
}) => {
  return (
    <div className="absolute top-full mt-1 w-2/5 right-10 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-300 text-sm select-none">
      <div className="flex flex-col p-2">
        <label htmlFor="minYear" className="text-nowrap mb-1">
          Minimum Year:
        </label>
        <input
          type="number"
          name="minYear"
          id="minYear"
          className="border rounded-md p-1 focus:outline-none focus:border-blue-300"
          value={searchBookParams.minYear?.toString()}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col p-2">
        <label htmlFor="maxYear" className="text-nowrap mb-1">
          Maximum Year:
        </label>
        <input
          type="number"
          name="maxYear"
          id="maxYear"
          className="border rounded-md p-1 focus:outline-none focus:border-blue-300"
          value={searchBookParams.maxYear?.toString()}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col p-2">
        <label htmlFor="minPage" className="text-nowrap mb-1">
          Minimum Page:
        </label>
        <input
          type="number"
          name="minPage"
          id="minPage"
          className="border rounded-md p-1 focus:outline-none focus:border-blue-300"
          value={searchBookParams.minPage?.toString()}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col p-2">
        <label htmlFor="maxPage" className="text-nowrap mb-1">
          Maximum Page:
        </label>
        <input
          type="number"
          name="maxPage"
          id="maxPage"
          className="border rounded-md p-1 focus:outline-none focus:border-blue-300"
          value={searchBookParams.maxPage?.toString()}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col p-2">
        <label htmlFor="sortByTitle" className="text-nowrap mb-1">
          Sort by Title:
        </label>
        <select
          name="sortByTitle"
          id="sortByTitle"
          className="border rounded-md p-1 focus:outline-none focus:border-blue-300"
          value={searchBookParams.sortByTitle}
          onChange={handleInputChange}
        >
          <option value="">None</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  )
}

export default FilterOption
