import React from 'react'

type BookCardProps = {
  title: string
  description: string
  image_url: string
  release_year: number
  price: string
  total_page: number
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  description,
  image_url,
  release_year,
  price,
  total_page
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-[300px] object-cover object-center"
        src={image_url}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">
          {title} ({release_year.toString()})
        </div>
        <div className="font-bold text-sm mb-2">
          {total_page.toString()} pages
        </div>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-700 font-bold">Price: {price}</p>
      </div>
    </div>
  )
}

export default BookCard
