import React from 'react'
import FooterItem from './footer-item'

const currentYear = new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <ul className="flex gap-3">
            <FooterItem>About</FooterItem>•<FooterItem>Contact</FooterItem>•
            <FooterItem>Terms of Use</FooterItem>•
            <FooterItem>Privacy Policy</FooterItem>
          </ul>

          <div className="text-gray-400">
            Copyright &copy; {currentYear} Diaz Linggaputra. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
