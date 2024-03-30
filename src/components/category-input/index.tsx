import React, { ChangeEvent, Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CiCirclePlus } from 'react-icons/ci'
import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { createCategory } from '../../store/slices/categoriesSlice'

type CategoryInputProps = {
  isShowAllCategories: boolean
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  isShowAllCategories
}) => {
  const dispatch = useDispatch()
  const [addCategoryVisible, setAddCategoryVisible] = useState<boolean>(false)
  const [newCategoryName, setNewCategoryName] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategoryName(e.target.value)
  }

  const handleCancelAddCategory = () => {
    setAddCategoryVisible(false)
    setNewCategoryName('')
  }

  const handleConfirmAddCategory = () => {
    if (newCategoryName) {
      dispatch(createCategory(newCategoryName) as any)
      setAddCategoryVisible(false)
      setNewCategoryName('')
    }
  }

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
            color="#3A96DD"
            className="cursor-pointer"
            onClick={handleConfirmAddCategory}
          />
        </div>
      </Fragment>
    )
  }
}

export default CategoryInput
