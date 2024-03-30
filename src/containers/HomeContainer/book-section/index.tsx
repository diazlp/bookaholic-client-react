import React from 'react'
import BookCard from '../../../components/book-card'
import useFetchBooks from '../../../hooks/useFetchBooks'
import BookInput from '../../../components/book-input'

const BookSection: React.FC = () => {
  const { books, status, error } = useFetchBooks()

  const renderBooks = () => {
    if (status === 'loading') {
      return <div>Loading...</div>
    }

    if (status === 'failed') {
      return <div>Error fetching books: {error}</div>
    }

    return books.map((book) => (
      <BookCard
        key={book.title}
        title={book.title}
        description={book.description}
        image_url={book.image_url}
        release_year={book.release_year}
        price={book.price}
        total_page={book.total_page}
      />
    ))
  }

  return (
    <div className="my-12">
      <section className="flex flex-col gap-10 max-w-screen-lg mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-center">Featured Books</h1>
        </div>

        {books.length ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
            {renderBooks()}
            <BookInput />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full">
            <BookInput />
          </div>
        )}
      </section>
    </div>
  )
}

export default BookSection
