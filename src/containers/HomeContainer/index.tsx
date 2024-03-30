import React from 'react'
import Layout from '../../components/layout'
import Masthead from '../../components/masthead'
import CategorySection from './category-section'
import BookSection from './book-section'

const HomeContainer: React.FC = () => {
  return (
    <Layout>
      <Masthead />
      <CategorySection />
      <BookSection />
    </Layout>
  )
}

export default HomeContainer
