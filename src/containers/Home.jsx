import React from 'react';

import { Button, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';

const contentStyle = {
  margin: 0,
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="gym"
              src="https://img9.hkrtcdn.com/22116/bnr_2211508_o.jpg"
              style={{ height: '460px', objectFit: 'contain' }}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="gym1"
              src="https://img5.hkrtcdn.com/22137/bnr_2213604_o.jpg"
              style={{ height: '460px', objectFit: 'contain' }}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="gym2"
              src="https://img3.hkrtcdn.com/22137/bnr_2213612_o.jpg"
              style={{ height: '460px', objectFit: 'contain' }}
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img
              alt="gym3"
              src="https://img3.hkrtcdn.com/22137/bnr_2213612_o.jpg"
              style={{ height: '460px', objectFit: 'contain' }}
            />
          </h3>
        </div>
      </Carousel>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={() => {
            navigate('/products');
          }}
          type="primary"
          style={{ width: '20%', marginTop: 20 }}
        >
          Enter
        </Button>
      </div>
    </>
  );
}

export default Home;
