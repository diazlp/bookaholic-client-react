import React from 'react'
import BookCard from '../../../components/book-card'

const BookSection: React.FC = () => {
  return (
    <div className="my-12">
      <section className="flex flex-col gap-5 max-w-screen-lg mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-center">Featured Books</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <BookCard
            title="Harry Potter and the Philosopher's Stone"
            description="The first book in the Harry Potter series by J.K. Rowling, following the journey of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry."
            image_url="https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg"
            release_year={1997}
            price="IDR 149000"
            total_page={300}
          />
        </div>
      </section>
    </div>
  )
}

export default BookSection
