import React, { Fragment } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import useCreateCategory from '../../hooks/useCreateCategory'

type CategoryInputProps = {
  isShowAllCategories: boolean
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  isShowAllCategories
}) => {
  const {
    addCategoryVisible,
    newCategoryName,
    handleInputChange,
    handleCancelAddCategory,
    handleConfirmAddCategory,
    setAddCategoryVisible
  } = useCreateCategory()

  if (!addCategoryVisible) {
    return (
      <CiCirclePlus
        size={60}
        color={'#3A96DD'}
        className={`transform ${isShowAllCategories ? 'animate-fade-in-down' : ''} text-center select-none cursor-pointer`}
        onClick={() => setAddCategoryVisible(true)}
      />
    )
  } else {
    return (
      <Fragment>
        <div
          className={`transform ${isShowAllCategories ? 'animate-fade-in-down' : ''} text-center select-none`}
        >
          <div className="bg-yellow-100 rounded-lg p-4 shadow-md text-gray-900">
            <input
              className="bg-yellow-100 outline-none w-full h-full text-2xl font-bold mb-2"
              type="text"
              value={newCategoryName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div
          className={`flex justify-start items-center transform ${isShowAllCategories ? 'animate-fade-in-down' : ''} select-none`}
        >
          <IoCloseCircleOutline
            size={60}
            color="#EB1F2B"
            className="cursor-pointer"
            onClick={handleCancelAddCategory}
          />
          <IoCheckmarkCircleOutline
            size={60}
            color={!newCategoryName ? '#EBEBE4' : '#3A96DD'}
            className={
              !newCategoryName ? 'cursor-not-allowed' : 'cursor-pointer'
            }
            onClick={handleConfirmAddCategory}
          />
        </div>
      </Fragment>
    )
  }
}

export default CategoryInput
