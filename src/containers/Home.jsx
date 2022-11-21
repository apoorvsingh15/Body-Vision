import React from 'react';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: 20 }}>
      This is the landng Page
      <Button
        onClick={() => {
          navigate('/products');
        }}
        type="primary"
      >
        Enter
      </Button>
    </div>
  );
}

export default Home;
