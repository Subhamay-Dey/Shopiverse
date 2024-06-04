import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection';

export default function Home() {
  const context = useContext(myContext);
  return (
    <Layout>
      <HeroSection/>
    </Layout>
  )
}