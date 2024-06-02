import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

export default function Home() {
  const context = useContext(myContext);
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )
}