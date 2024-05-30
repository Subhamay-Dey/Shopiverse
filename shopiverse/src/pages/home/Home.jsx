import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

export default function Home() {
  const context = useContext(myContext);
  console.log(context);
  const {state, color} = context;
  return (
    <Layout>
      <h1>Name : {state.name}</h1>
      <h1>Roll : {state.roll}</h1>
      <h1>Color : {color}</h1>
    </Layout>
  )
}