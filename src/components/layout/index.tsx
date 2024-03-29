import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'

type LayoutProps = {
  children: React.ReactNode | string
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
