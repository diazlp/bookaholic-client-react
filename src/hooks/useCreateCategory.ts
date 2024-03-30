import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { createCategory } from '../store/slices/categoriesSlice'

interface useCreateCategoryResult {
  addCategoryVisible: boolean
  newCategoryName: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleCancelAddCategory: () => void
  handleConfirmAddCategory: () => void
  setAddCategoryVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const useCreateCategory = (): useCreateCategoryResult => {
  const dispatch: AppDispatch = useDispatch()
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

  return {
    addCategoryVisible,
    newCategoryName,
    handleInputChange,
    handleCancelAddCategory,
    handleConfirmAddCategory,
    setAddCategoryVisible
  }
}

export default useCreateCategory
