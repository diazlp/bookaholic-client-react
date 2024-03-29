import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './masthead.module.css'

const Masthead: React.FC = () => {
  return (
    <section className={styles.masthead}>
      <div className="max-w-screen-sm mx-auto text-center">
        <div className="flex flex-col justify-center gap-10">
          <div className="text-white font-bold z-10 text-4xl">
            <h1>Welcome to Bookaholic</h1>
            <h1>Home of the largest library</h1>
          </div>

          <form className="flex items-center z-10 justify-center">
            <input
              type="text"
              placeholder="Search for Books"
              className="border border-gray-50 px-4 py-3 rounded-l-md focus:outline-none focus:border-blue-100 w-[75%]"
            />
            <button
              className="flex justify-center items-center bg-blue-100 border border-blue-100 text-white text-xl rounded-r-md h-[50px] w-[46px]"
              type="submit"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Masthead
