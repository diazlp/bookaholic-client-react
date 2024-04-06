import React from 'react'
import { useSelector } from 'react-redux'
import { CiCirclePlus } from 'react-icons/ci'
import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { RootState } from '../../store'
import useCreateBook from '../../hooks/useCreateBook'

const BookInput: React.FC = () => {
  const {
    addBookVisible,
    isValidYear,
    createBookPayload,
    setAddBookVisible,
    handleCancelAddBook,
    handleConfirmAddBook,
    handleInputChange
  } = useCreateBook()
  const { categories } = useSelector((state: RootState) => state.categories)

  if (!addBookVisible) {
    return (
      <div
        className="flex flex-col items-center justify-center px-6 py-4 h-[680px] select-none cursor-pointer text-center hover:bg-blue-10"
        onClick={() => setAddBookVisible(true)}
      >
        <CiCirclePlus size={120} color={'#3A96DD'} />

        <div className="font-bold text-xl text-gray-500">Add New Book</div>
      </div>
    )
  } else {
    return (
      <div className="rounded overflow-hidden shadow-lg">
        <div className="flex flex-col px-6 py-4 h-[680px]">
          <div className="my-32">
            <label htmlFor="image_url" className="font-semibold text-sm">
              Book Image URL:
            </label>
            <input
              type="text"
              name="image_url"
              placeholder="https://google.photos.com"
              className="outline-none w-full"
              value={createBookPayload.image_url}
              onChange={handleInputChange}
            />
          </div>

          <div className="font-bold text-xl mb-2">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              className="outline-none"
              value={createBookPayload.title}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="release_year"
              placeholder="Release Year"
              className={`outline-none ${!isValidYear ? 'outline-red-100' : ''}`}
              value={createBookPayload.release_year}
              onChange={handleInputChange}
            />
            {!isValidYear && (
              <div className="text-red-100 text-xs">
                Must be between 1980 and 2021
              </div>
            )}
          </div>
          <div className="font-bold text-sm mb-2">
            <input
              type="number"
              name="total_page"
              placeholder="total pages"
              className="outline-none"
              value={createBookPayload.total_page}
              onChange={handleInputChange}
            />
            pages
          </div>
          <p className="text-gray-700 mb-2">
            <textarea
              name="description"
              placeholder="Enter book description"
              rows={7}
              className="outline-none w-full"
              value={createBookPayload.description}
              onChange={handleInputChange}
            />
          </p>
          <div className="mt-auto">
            <p className="text-gray-700 font-bold">
              Price: IDR &#8202;
              <input
                type="number"
                name="price"
                className="w-2/3 outline-none"
                placeholder="0"
                value={createBookPayload.price}
                onChange={handleInputChange}
              />
            </p>
            <div className="flex justify-between items-center transform select-none">
              <select
                id="category_id"
                name="category_id"
                className="font-bold text-blue-100 outline outline-1 focus:outline-blue-100"
                value={createBookPayload.category_id}
                onChange={handleInputChange}
              >
                {categories.rows?.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center">
                <IoCloseCircleOutline
                  size={30}
                  color="#EB1F2B"
                  className="cursor-pointer"
                  onClick={handleCancelAddBook}
                />
                <IoCheckmarkCircleOutline
                  size={30}
                  color={
                    Object.values(createBookPayload).some((value) => !value)
                      ? '#EBEBE4'
                      : '#3A96DD'
                  }
                  className={
                    Object.values(createBookPayload).some((value) => !value)
                      ? 'cursor-not-allowed'
                      : 'cursor-pointer'
                  }
                  onClick={handleConfirmAddBook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookInput
