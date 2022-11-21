import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import jsonData from '../data/gymData.json';
import { addToCart, deleteFromCart } from '../redux/slice/cartSlice';

function Products() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const productData = JSON.parse(JSON.stringify(jsonData));

  const { Meta } = Card;

  const addItemsToCart = (item) => {
    dispatch(addToCart(item));
  };

  const clearCart = () => {
    dispatch(deleteFromCart());
  };

  return (
    <div>
      {console.log(cartItems)}
      <h1>Products</h1>
      {productData.products.map((item) => (
        <Card
          onClick={() => navigate('/productDetails', { state: { item } })}
          key={item.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="gym_image_container" src={item.image} />}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addItemsToCart(item);
            }}
          >
            Add to Cart
          </Button>
          <Meta title={item.name} description={item.price} />
        </Card>
      ))}
      <Button onClick={() => clearCart()}>Clear Cart Data</Button>
    </div>
  );
}

export default Products;
