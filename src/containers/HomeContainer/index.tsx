import React from 'react'
import Layout from '../../components/layout'
import Masthead from '../../components/masthead'
import CategorySection from './category-section'
import BookSection from './book-section'
import TestimonySection from './testimony-section'

const HomeContainer: React.FC = () => {
  return (
    <Layout>
      <Masthead />
      <CategorySection />
      <BookSection />
      <TestimonySection />
    </Layout>
  )
}

export default HomeContainer
