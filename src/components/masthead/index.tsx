import React from 'react'
import styles from './masthead.module.css'
import SearchInput from '../search-input'

const Masthead: React.FC = () => {
  return (
    <section className={styles.masthead}>
      <div className="max-w-screen-sm mx-auto text-center">
        <div className="flex flex-col justify-center gap-10">
          <div className="text-white font-bold z-10 text-4xl">
            <h1>Welcome to Bookaholic</h1>
            <h1>Home of the largest library</h1>
          </div>

          <SearchInput />
        </div>
      </div>
    </section>
  )
}

export default Masthead
