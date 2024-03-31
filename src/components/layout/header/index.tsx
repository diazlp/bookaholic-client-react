import React from 'react'
import {
  // FaRegHeart,
  FaRegUser
} from 'react-icons/fa'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-50 shadow-lg p-5 select-none h-16">
      <section className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center text-black">
          <div className="flex items-center font-semibold cursor-pointer">
            📘 Bookaholic
          </div>
          <div className="flex items-center gap-5">
            {/* <FaRegHeart size={20} className="cursor-pointer" /> */}
            <FaRegUser size={20} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
