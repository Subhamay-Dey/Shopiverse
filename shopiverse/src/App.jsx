import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from './pages/cart/Cart';
import Dashboard from "./pages/admin/dashboard/Dashboard";
import ErrorPage from "./pages/error/ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
