import React from 'react'
import { MainContainer } from './style'
import CimaLogo from '../../assets/images/cima-logo.png'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { sendNotification } from '../../services/notificationService'

const LoginPage = (props) => {
  const { setIsLoggedIn } = props
  const onFinish = async (values) => {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(values)
    }).then(res => res.json())

    if(response.error === 0){
      window.localStorage.setItem('userId', response.userId)
      sendNotification('success', 'Login success', 3)
      setIsLoggedIn('true');
    } else {
      sendNotification('error', response.message, 3)
    }
    
  };
  return (
    <MainContainer>
      <img src={CimaLogo} alt="logo" />
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="usernameOrEmail"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button> Or <a href="/sign-up">register now!</a>
      </Form.Item>
    </Form>
    </MainContainer>
  )
}

export default LoginPage