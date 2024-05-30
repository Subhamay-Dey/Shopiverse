import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

export default function Order() {
  const context = useContext(myContext);
  const {state, color} = context
  return (
    <Layout>
      Order
      <h1>Name : {state.name}</h1>
      <h1>Roll : {state.roll}</h1>
      <h1>Color : {color}</h1>
    </Layout>
  )
}