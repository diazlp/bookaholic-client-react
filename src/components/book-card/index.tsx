import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { RootState } from '../../store'
import useBookAction from '../../hooks/useBookAction'

type BookCardProps = {
  id: number
  title: string
  description: string
  image_url: string
  release_year: number
  price: string
  total_page: number
  category_id: number
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  description,
  image_url,
  release_year,
  price,
  total_page,
  category_id
}) => {
  const {
    deleteConfirmationVisible,
    editBookMode,
    editBookPayload,
    isValidYear,
    toggleDeleteConfirmation,
    handleEditBookMode,
    handleConfirmDeleteBook,
    handleCancelEditBook,
    handleConfirmEditBook,
    handleInputChange
  } = useBookAction()
  const { categories } = useSelector((state: RootState) => state.categories)

  return (
    <div className="rounded overflow-hidden shadow-lg">
      {!editBookMode ? (
        <Fragment>
          <img
            className="w-full h-[300px] object-cover object-center"
            src={image_url}
            alt={title}
          />
          <div className="flex flex-col px-6 py-4 h-[380px]">
            <div className="font-bold text-xl mb-1">
              {title} ({release_year.toString()})
            </div>
            <div className="font-bold text-sm mb-2">
              {total_page.toString()} pages
            </div>
            <p className="text-gray-700 mb-2">{description}</p>
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <p className="text-gray-700 font-bold text-nowrap">
                  Price: {price}
                </p>

                <div className="flex">
                  <MdModeEdit
                    size={25}
                    color="#008000"
                    className="cursor-pointer"
                    onClick={() =>
                      handleEditBookMode({
                        title,
                        description,
                        image_url,
                        release_year,
                        price,
                        total_page,
                        category_id
                      })
                    }
                  />
                  <MdDeleteForever
                    size={25}
                    color="#EB1F2B"
                    className="cursor-pointer"
                    onClick={toggleDeleteConfirmation}
                  />
                </div>
              </div>

              {deleteConfirmationVisible && (
                <div
                  className={`flex items-center justify-between ${deleteConfirmationVisible ? 'animate-fade-in-down' : ''}`}
                >
                  <p className="text-blue-700">Are you sure?</p>

                  <div className="flex">
                    <IoCloseCircleOutline
                      size={30}
                      color="#EB1F2B"
                      className="cursor-pointer"
                      onClick={toggleDeleteConfirmation}
                    />
                    <IoCheckmarkCircleOutline
                      size={30}
                      color="#3A96DD"
                      className="cursor-pointer"
                      onClick={() => handleConfirmDeleteBook(id)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
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
                value={editBookPayload.image_url}
                onChange={handleInputChange}
              />
            </div>

            <div className="font-bold text-xl mb-2">
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                className="outline-none"
                value={editBookPayload.title}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="release_year"
                placeholder="Release Year"
                className={`outline-none ${!isValidYear ? 'outline-red-100' : ''}`}
                value={editBookPayload.release_year}
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
                value={editBookPayload.total_page}
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
                value={editBookPayload.description}
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
                  value={editBookPayload.price}
                  onChange={handleInputChange}
                />
              </p>
              <div className="flex justify-between items-center transform select-none">
                <select
                  id="category_id"
                  name="category_id"
                  className="font-bold text-blue-100 outline outline-1 focus:outline-blue-100"
                  value={editBookPayload.category_id}
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
                    onClick={handleCancelEditBook}
                  />
                  <IoCheckmarkCircleOutline
                    size={30}
                    color="#3A96DD"
                    className="cursor-pointer"
                    onClick={() => handleConfirmEditBook(id)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default BookCard
