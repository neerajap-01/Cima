import {
  Button,
  Checkbox,
  Form,
  Input,
} from 'antd';
import CimaLogo from '../../assets/images/cima-logo.png'
import { MainContainer } from './style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { sendNotification } from '../../services/notificationService'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const { isLoggedIn } = props
  useEffect(() => {
    if(isLoggedIn === 'true') {
      navigate('/')
    }
  }, [])
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
    if(response.error === 1){
      sendNotification('error', response.message, 3)
    } else {
      sendNotification('succes', response.message, 3)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  };
  
  return (
    <MainContainer>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please enter your first name!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'Please enter your last name!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="employeeId"
          label="Employee ID"
          rules={[
            {
              required: true,
              message: 'Please enter valid employee Id!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="/">agreement</a>
          </Checkbox>
        </Form.Item> */}

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button> Or <a href="/">Log-in now</a>
        </Form.Item>
      </Form>
      <img src={CimaLogo} alt="logo" />
    </MainContainer>
  );
};
export default SignUpForm;