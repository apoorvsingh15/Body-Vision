/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import Cart from '../containers/Cart';
import Home from '../containers/Home';
import ProductDetails from '../containers/ProductDetails';
import Products from '../containers/Products';
import Checkout from '../containers/Checkout';
import Signup from '../containers/Auth/Signup';
import { logout } from '../redux/slice/userSlice';

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        padding: 20,
        marginTop: 240,
        bottom: 0,
        background: '#ccc',
        height: 150,
        justifyContent: 'space-between',
      }}
    >
      <div>
        <img
          alt="gym3"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/A-G.svg"
        />
        <img
          alt="gym3"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/RP.svg"
          style={{ marginLeft: 20 }}
        />
      </div>

      <div style={{ marginLeft: 20, display: 'flex', alignItems: 'center' }}>
        Copyright © 2022, BodyVision.com, or its affiliates
      </div>
      <div>
        <h2 style={{ marginRight: 10 }}>Soon on:</h2>
        <img
          alt="gym3"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/App-Store.svg"
        />
        <img
          alt="gym3"
          src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/Google-Play.svg"
        />
      </div>
    </div>
  );
}

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userName = useSelector((state) => state.user.userEmail);
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
      <div style={{ display: 'flex', alignContent: 'end' }}>
        <h3 style={{ color: '#1890ff' }}>Hi, {userName}</h3>
        <Badge count={cartItems.length}>
          <ShoppingCartOutlined
            style={{ fontSize: 28, marginLeft: 20 }}
            onClick={() => navigate('/cart')}
          />
        </Badge>
        <Button
          onClick={() => {
            dispatch(logout());
            navigate('/signup');
          }}
          type="primary"
          style={{ marginLeft: 20 }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.user.userToken);
  const isUserAuthenticated = token !== '';
  if (!isUserAuthenticated) {
    // user is not authenticated
    return <Navigate to="/signup" />;
  }
  return children;
}

export default function AppRoutes() {
  const token = useSelector((state) => state.user.userToken);
  const isUserAuthenticated = token !== '';
  return (
    <div>
      <Router>
        {isUserAuthenticated && <Header />}

        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/productDetails" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        {isUserAuthenticated && <Footer />}
      </Router>
    </div>
  );
}
