/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import Cart from '../containers/Cart';
import Home from '../containers/Home';
import ProductDetails from '../containers/ProductDetails';
import Products from '../containers/Products';
import Checkout from '../containers/Checkout';

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div
      style={{
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 1,
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      }}
    >
      <h3 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        Body Vision
      </h3>
      <Badge count={cartItems.length}>
        <ShoppingCartOutlined
          style={{ fontSize: 28 }}
          onClick={() => navigate('/cart')}
        />
      </Badge>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productDetails" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
