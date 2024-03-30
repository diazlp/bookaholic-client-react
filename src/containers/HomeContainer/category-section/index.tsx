import React, { Fragment } from 'react'
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown
} from 'react-icons/md'
import CategoryCard from '../../../components/category-card'
import Utils from '../../../lib/utils'
import useFetchCategories from '../../../hooks/useFetchCategories'

const CategorySection: React.FC = () => {
  const { categories, status, error, showAllCategories, toggleCategories } =
    useFetchCategories()

  const renderCategories = () => {
    if (status === 'loading') {
      return <div>Loading...</div>
    }

    if (status === 'failed') {
      return <div>Error fetching categories: {error}</div>
    }

    if (!showAllCategories) {
      return categories
        .slice(0, 4)
        .map((category, index) => (
          <CategoryCard
            key={index}
            category={category.name}
            color={Utils.getRandomColor()}
          />
        ))
    } else {
      return categories.map((category, index) => (
        <div key={index} className={`transform animate-fade-in-down`}>
          <CategoryCard
            category={category.name}
            color={Utils.getRandomColor()}
          />
        </div>
      ))
    }
  }

  return (
    <div className="my-12">
      <section className="flex flex-col gap-5 max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Featured Categories</h1>
          <div
            className="flex items-center text-gray-400 cursor-pointer select-none"
            onClick={toggleCategories}
          >
            {showAllCategories ? (
              <Fragment>
                Show Less
                <MdOutlineKeyboardArrowDown size={25} />
              </Fragment>
            ) : (
              <Fragment>
                All Categories
                <MdOutlineKeyboardArrowRight size={25} />
              </Fragment>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {renderCategories()}
        </div>
      </section>
    </div>
  )
}

export default CategorySection
