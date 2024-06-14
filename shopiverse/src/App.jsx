import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from './pages/cart/Cart';
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ErrorPage from "./pages/error/ErrorPage";
import MyState from './context/data/myState';
import AllProducts from './pages/allproducts/AllProducts';
import Login from './pages/log/Login';
import ProductInfo from './pages/productInfo/productInfo';

const App = () => {
  return (
  <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productInfo/:id' element={<ProductInfo/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </MyState>
  )
}

export default App
