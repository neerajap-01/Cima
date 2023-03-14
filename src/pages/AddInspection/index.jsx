import React, { Fragment, useState } from 'react'
import { Breadcrumb, Button, Form, Steps, Input, DatePicker, Tooltip } from 'antd'
import { HomeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Container, Main, TitleText } from '../HomePage/styles'
import { useNavigate } from 'react-router-dom'
import { StepContainer } from './styles'

const { Step } = Steps;

const AddInspection = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current+1)
  }

  const prev = () => {
    setCurrent(current-1)
  }

  const handleDone = () => {
    navigate('/new-inspection')
  }

  const handleBack = () => {
    navigate('/')
  }

  const renderPartData = () => {
    return (
      <Fragment>
        <TitleText
          fontSize={"20px"}
          fontWeight={"600"}
          color={"#000"}
          margin={"10px 0 0 0"}
        >
          Part Data
        </TitleText>
        <Form
          name="part-data"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Part Identification"
            name="part-number"
            rules={[
              {
                required: true,
                message: 'Please input your Part Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Procedure"
            name="procedure"
            rules={[
              {
                required: true,
                message: 'Please input your Procedure!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="PNID #"
            name="pnid"
            rules={[
              {
                required: true,
                message: 'Please input your PNID!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="DWG #"
            name="dwg"
            rules={[
              {
                required: true,
                message: 'Please input your DWG!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Temp"
            name="temp"
            rules={[
              {
                required: true,
                message: 'Please input your TEMP!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="MTL"
            name="mtl"
            rules={[
              {
                required: true,
                message: 'Please input your MTL!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Fragment>
    )
  }

  const renderClient = () => {
    return (
      <Fragment>
        <TitleText
          fontSize={"20px"}
          fontWeight={"600"}
          color={"#000"}
          margin={"1rem 0"}
        >
          Client Data
        </TitleText>
        <Form
          name="client-data"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Client"
            name="client"
            rules={[
              {
                required: true,
                message: 'Please input your Client!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: 'Please input your Location!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: 'Please input your date!',
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Part #/Report #"
            name="part/report"
            rules={[
              {
                required: true,
                message: 'Please enter a valid input',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Fragment>
    )
  }

  const renderCalibrationBlock = () => {
    return (
      <Fragment>
        <TitleText
          fontSize={"20px"}
          fontWeight={"600"}
          color={"#000"}
          margin={"10px 0 0 0"}
        >
          Calibration Block
        </TitleText>
        <Form
          name="calibration-block"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Material"
            name="material"
            rules={[
              {
                required: true,
                message: 'Please input your material!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Surface"
            name="surface"
            rules={[
              {
                required: true,
                message: 'Please input your surface!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Model #"
            name="model"
            rules={[
              {
                required: true,
                message: 'Please input your Model!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Serial #"
            name="serial"
            rules={[
              {
                required: true,
                message: 'Please input your Serial!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Probe Model"
            name="probe-model"
            rules={[
              {
                required: true,
                message: 'Please input your Probe-Model!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Probe Serial"
            name="probe-serial"
            rules={[
              {
                required: true,
                message: 'Please input your Probe-Serial!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Fragment>
    )
  }

  const renderPartData2 = () => {
    return (
      <Fragment>
        <TitleText
          fontSize={"20px"}
          fontWeight={"600"}
          color={"#000"}
          margin={"1rem 0"}
        >
          Part Data - 2
        </TitleText>
        <Form
          name="part-data-2"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Velocity"
            name="velocity"
            rules={[
              {
                required: true,
                message: 'Please input your Velocity!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Delay"
            name="delay"
            rules={[
              {
                required: true,
                message: 'Please input your delay!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Frequency"
            name="frequency"
            rules={[
              {
                required: true,
                message: 'Please input your frequency!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Other"
            name="other"
          >
            <Input />
          </Form.Item>
        </Form>
      </Fragment>
    )
  }

  const steps = [
    {
      title: "Client",
      content: renderClient(),
    },
    {
      title: "Part Data",
      content: renderPartData(),
    },
    {
      title: "Calibration Block",
      content: renderCalibrationBlock(),
    },
    {
      title: "Part Data 2",
      content: renderPartData2(),
    },
  ];

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Add Inspection
        </Breadcrumb.Item>
      </Breadcrumb>
      <Main>
        <TitleText
          fontSize={"53px"} 
          fontWeight={"700"}
        >
          Add Inspection
        </TitleText>
      </Main>
      <Button
        type="primary"
        style={{ marginBottom: "1em" }}
        onClick={handleBack}
      >
        <LeftOutlined /> Back
      </Button>
      <Steps
        type='navigation'
        size="small"
        current={current}
      >
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <StepContainer>
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
      }}
      >
        {current < steps.length - 1 ? (
          <Tooltip title="Next">
            <Button
              type="primary"
              onClick={() => next()}
            >
              <RightOutlined />
            </Button>
          </Tooltip>
        ) : null}
        {current === steps.length - 1 && (          
          <Button
            type="primary"
            onClick={handleDone}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Tooltip title="Previous">
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => prev()}
            >
              <LeftOutlined />
            </Button>
          </Tooltip>
        )}
      </div>
        {steps[current].content}
      </StepContainer>
      
    </Container>
  )
}

export default AddInspection