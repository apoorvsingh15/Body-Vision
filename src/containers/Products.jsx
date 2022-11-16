import React from 'react';

import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import jsonData from '../data/gymData.json';

function Products() {
  const navigate = useNavigate();
  const productData = JSON.parse(JSON.stringify(jsonData));

  const { Meta } = Card;

  return (
    <div>
      <h1>Products</h1>
      {productData.products.map((item) => (
        <Card
          onClick={() => navigate('/productDetails', { state: { item } })}
          key={item.id}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="gym_image_container" src={item.image} />}
        >
          <Meta title={item.name} description={item.price} />
        </Card>
      ))}
    </div>
  );
}

export default Products;
