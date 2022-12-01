/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Form, Input, InputNumber, Result, message } from 'antd';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values) => {
    messageApi.open({
      type: 'success',
      content: `${values.user.name}, your feedback has been registered successfully`,
    });
    form.resetFields();
  };

  return (
    <div>
      {contextHolder}
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
      <Form
        form={form}
        // eslint-disable-next-line react/jsx-props-no-spreading
        style={{ width: 600, margin: '0 auto' }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ width: 600 }}
          name={['user', 'age']}
          label="Age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name={['user', 'introduction']}
          label="Feedback"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Checkout;
