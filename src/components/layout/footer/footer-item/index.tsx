import React from 'react'

type FooterItemProps = {
  children: React.ReactNode | string
}

const FooterItem: React.FC<FooterItemProps> = ({ children }) => {
  return <li className="underline cursor-pointer text-blue-100">{children}</li>
}

export default FooterItem
