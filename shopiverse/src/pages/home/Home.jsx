import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import {useDispatch, useSelector} from "react-redux"
import { addProduct, deleteProduct } from '../../toolkit/cartSlice';

 function Home() {

  const context = useContext(myContext);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispatch(addProduct("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteProduct("shirt"));
  }

  return (
    <Layout>
      <div className="flex justify-center gap-4">
        <button className='bg-gray-600 p-2' onClick={() => addCart()}>add</button>
        <button className='bg-gray-600 p-2' onClick={() => deleteCart()}>delete</button>
      </div>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}
export default Home;