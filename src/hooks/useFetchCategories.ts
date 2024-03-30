import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import {
  CategoriesState,
  Category,
  fetchCategories
} from '../store/slices/categoriesSlice'

interface useFetchCategoriesResult extends Omit<CategoriesState, 'categories'> {
  categories: Category[]
  showAllCategories: boolean
  toggleCategories: () => void
}

const useFetchCategories = (): useFetchCategoriesResult => {
  const dispatch: AppDispatch = useDispatch()
  const { categories, status, error } = useSelector(
    (state: RootState) => state.categories
  )

  const [showAllCategories, setShowAllCategories] = useState<boolean>(false)

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories)
  }

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return {
    categories: categories.rows,
    status,
    error,
    showAllCategories,
    toggleCategories
  }
}

export default useFetchCategories
