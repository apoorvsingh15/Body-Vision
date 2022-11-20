import React from 'react';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: 20 }}>
      This is the landng Page
      <Button onClick={() => navigate('/products')} type="primary">
        Enter
      </Button>
      <Badge count={5}>
        <ShoppingCartOutlined
          style={{ fontSize: 28 }}
          onClick={() => navigate('/cart')}
        />
      </Badge>
    </div>
  );
}

export default Home;
