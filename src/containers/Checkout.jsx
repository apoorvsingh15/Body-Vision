import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="Purchase Successful!"
        subTitle="Order number: 2017182818828182881 Your order will reach you in 1-5 business days, please wait."
        extra={[
          <Button
            type="primary"
            key="shopping"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </Button>,
        ]}
      />
    </div>
  );
}

export default Checkout;
