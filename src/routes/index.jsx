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

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Badge count={cartItems.length}>
      <ShoppingCartOutlined
        style={{ fontSize: 28 }}
        onClick={() => navigate('/cart')}
      />
    </Badge>
  );
}

export default function AppRoutes() {
  return (
    <div>
      <Router>
        <div style={{ marginTop: 20 }}>
          <Header />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productDetails" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
