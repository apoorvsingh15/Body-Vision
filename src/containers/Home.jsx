import React from 'react';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: 'flex', marginTop: 50, justifyContent: 'center' }}>
        <img
          alt="gym"
          src="http://localhost:3000/background.png"
          style={{ width: '50%', alignSelf: 'center' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => {
            navigate('/products');
          }}
          type="primary"
          style={{ width: '20%' }}
        >
          Enter
        </Button>
      </div>
    </>
  );
}

export default Home;
