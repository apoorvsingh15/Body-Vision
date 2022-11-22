import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card, Button, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { removeItem, deleteFromCart } from '../redux/slice/cartSlice';

function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const { Meta } = Card;

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const clearCart = () => {
    dispatch(deleteFromCart());
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <h1>Your Cart</h1>
        <div>
          <Button
            type="primary"
            onClick={() => {
              navigate('/checkout');
              clearCart();
            }}
            style={{ marginRight: 10 }}
            disabled={!cartItems.length}
          >
            Checkout
          </Button>
          <Button
            disabled={!cartItems.length}
            type="primary"
            danger
            onClick={() => clearCart()}
          >
            Clear Cart
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',

          justifyContent: 'space-around',
        }}
      >
        {cartItems.length ? (
          cartItems.map((item) => (
            <Card
              onClick={() => navigate('/productDetails', { state: { item } })}
              key={item.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="gym_image_container" src={item.image} />}
            >
              <Meta title={item.name} description={item.price} />
              <Button
                type="primary"
                danger
                style={{ width: '100%', marginTop: 10 }}
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item);
                }}
              >
                Remove Item
              </Button>
            </Card>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
}

export default Cart;
