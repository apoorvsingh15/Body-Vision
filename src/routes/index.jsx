import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../containers/Cart';
import Home from '../containers/Home';
import ProductDetails from '../containers/ProductDetails';
import Products from '../containers/Products';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productDetails" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
