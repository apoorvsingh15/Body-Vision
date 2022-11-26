import React, { useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Form, Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { signInSuccess } from '../../redux/slice/userSlice';

function Signup() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios({
        method: 'post',
        url: 'https://reqres.in/api/login',
        data: {
          email: values.username,
          password: values.password,
        },
      });
      if (result.data.token) {
        dispatch(
          signInSuccess({
            userEmail: values.username,
            token: result.data.token,
          }),
        );

        setLoading(false);
        navigate('/');
      }
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: 'User not found',
      });
      setLoading(false);
    }
  };
  const onFinishFailed = () => {
    messageApi.open({
      type: 'error',
      content: 'Username or Password not correct.',
    });
  };
  return (
    <>
      {contextHolder}
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
        }}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Signup;
