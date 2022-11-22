import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';

import jsonData from '../data/gymData.json';
import { addToCart } from '../redux/slice/cartSlice';

function Products() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const productData = JSON.parse(JSON.stringify(jsonData));

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
    messageApi.open({
      type: 'success',
      content: `${item.name} has been added to cart`,
    });
    dispatch(addToCart(item));
  };

  return (
    <div>
      {contextHolder}
      <h1>Products</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {productData.products.map((item) => (
          <Card
            onClick={() => navigate('/productDetails', { state: { item } })}
            key={item.id}
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="gym_image_container" src={item.image} />}
          >
            <Meta title={item.name} description={item.price} />
            <Button
              type="primary"
              style={{ width: '100%', marginTop: 10 }}
              onClick={(e) => {
                e.stopPropagation();
                addItemsToCart(item);
              }}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
