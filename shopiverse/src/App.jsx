import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from './pages/cart/Cart';
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ErrorPage from "./pages/error/ErrorPage";
import MyState from './context/data/myState';
import AllProducts from './pages/allproducts/AllProducts';
import Login from './pages/registration/Login';
import ProductInfo from './pages/productInfo/productInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import SignUp from './pages/registration/SignUp';

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
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productInfo/:id' element={<ProductInfo/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/updateproduct' element={<UpdateProduct/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
    </MyState>
  )
}

export default App
