import React from 'react'

type CategoryCardProps = {
  category: string
  color: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, color }) => {
  return (
    <div
      className={`${color} rounded-lg p-4 shadow-md text-gray-900 select-none cursor-pointer hover:shadow-xl`}
    >
      <h2 className="text-2xl font-bold mb-2">{category}</h2>
    </div>
  )
}

export default CategoryCard
