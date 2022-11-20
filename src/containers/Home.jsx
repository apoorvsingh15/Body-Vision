import React from 'react';
import { useSelector } from 'react-redux';

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
// import { increment } from '../redux/slice/counter';

function Home() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 20 }}>
      This is the landng Page
      <Button
        onClick={() => {
          navigate('/products');
          // dispatch(increment(2));
        }}
        type="primary"
      >
        Enter
      </Button>
      <Badge count={count}>
        <ShoppingCartOutlined
          style={{ fontSize: 28 }}
          onClick={() => navigate('/cart')}
        />
      </Badge>
    </div>
  );
}

export default Home;
