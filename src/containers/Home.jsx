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
      <div
        style={{
          display: 'flex',
          padding: 20,
          marginTop: 240,
          bottom: 0,
          background: '#ccc',
          height: 150,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <img
            alt="gym3"
            src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/A-G.svg"
          />
          <img
            alt="gym3"
            src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/RP.svg"
            style={{ marginLeft: 20 }}
          />
        </div>

        <div style={{ marginLeft: 20, display: 'flex', alignItems: 'center' }}>
          Copyright © 2022, BodyVision.com, or its affiliates
        </div>
        <div>
          <h2 style={{ marginRight: 10 }}>Soon on:</h2>
          <img
            alt="gym3"
            src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/App-Store.svg"
          />
          <img
            alt="gym3"
            src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/Google-Play.svg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
