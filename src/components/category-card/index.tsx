import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategoryBooks } from '../../store/slices/booksSlice'
import { AppDispatch } from '../../store'

type CategoryCardProps = {
  id: number
  category: string
  color: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, category, color }) => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div
      className={`${color} rounded-lg p-4 shadow-md text-gray-900 select-none cursor-pointer hover:shadow-xl hover:bg-blue-100`}
      onClick={() => dispatch(fetchCategoryBooks(id))}
    >
      <h2 className="text-2xl font-bold mb-2">{category}</h2>
    </div>
  )
}

export default CategoryCard
