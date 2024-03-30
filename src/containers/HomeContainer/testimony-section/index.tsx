import React from 'react'
import TestimonyItem from './testimony-item'

const TestimonySection: React.FC = () => {
  return (
    <div className="text-center bg-gray-100 p-[5rem]">
      <section className="max-w-screen-lg mx-auto flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-10">What people are saying...</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          <TestimonyItem
            image_url="/assets/testimony-3.jpg"
            name="Margaret E."
            testimony={'"This is fantastic! Thank you so much guys!"'}
          />
          <TestimonyItem
            image_url="/assets/testimony-2.jpg"
            name="Fred S."
            testimony={
              '"Bookaholic is amazing. I\'ve been using it for years."'
            }
          />
          <TestimonyItem
            image_url="/assets/testimony-1.jpg"
            name="Sarah W."
            testimony={
              '"Thanks so much for making these free resources available to us!"'
            }
          />
        </div>
      </section>
    </div>
  )
}

export default TestimonySection
