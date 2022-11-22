import React from 'react';

import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Card, Button, message } from 'antd';
import { addToCart } from '../redux/slice/cartSlice';

function ProductDetails() {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const { Meta } = Card;

  const addItemsToCart = (item) => {
    const found = cartItems.find((cartElement) => cartElement.id === item.id);
    if (found) {
      messageApi.open({
        type: 'error',
        content: `${item.name} has already been added to cart`,
      });

      return;
    }

    dispatch(addToCart(item));
    messageApi.open({
      type: 'success',
      content: `${item.name} has been added to cart`,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {contextHolder}
      <Card
        key={location.state.item.id}
        hoverable
        style={{ width: 440, marginTop: 12 }}
        cover={
          <img alt="gym_image_container" src={location.state.item.image} />
        }
      >
        <Meta
          title={location.state.item.name}
          description={`Rs. ${location.state.item.price}/-`}
        />
        <Button
          type="primary"
          onClick={() => {
            addItemsToCart(location.state.item);
          }}
          style={{ width: '100%', marginTop: 10 }}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}

export default ProductDetails;
