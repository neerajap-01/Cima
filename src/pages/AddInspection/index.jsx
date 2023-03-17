import React, { Fragment, useState } from 'react'
import { Breadcrumb, Button, Form, Steps, Input, DatePicker, Tooltip } from 'antd'
import { HomeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Container, Main, TitleText } from '../HomePage/styles'
import { useNavigate } from 'react-router-dom'
import { StepContainer, TextLable } from './styles'
import { sendNotification } from '../../services/notificationService'
import Loader from '../../components/Loading'

const { Step } = Steps;
const customFormat = value => `custom format: ${value.format("YYYY-MM-DD")}`;

const AddInspection = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [clientFormData, setClientFormData] = useState({
    userId: window.localStorage.getItem('userId')
  });
  const [partFormData, setPartFormData] = useState({
    clientId: window.localStorage.getItem('clientId')
  });
  const [calibrationFormData, setCalibrationFormData] = useState({
    clientId: window.localStorage.getItem('clientId'),
    delay: "0",
    frequency: "5MHZ"
  });
  const [loading, setLoading] = useState(false)

  // const reInitialize = () => {
  //   setClientFormData({
  //     userId: window.localStorage.getItem('userId')
  //   })
  //   setPartFormData({
  //     clientId: window.localStorage.getItem('clientId')
  //   })
  //   setCalibrationFormData({
  //     clientId: window.localStorage.getItem('clientId'),
  //     delay: "0",
  //     frequency: "5MHZ"
  //   })
  // }

  const next = async () => {
    const resp = await saveFormData();
    if(!resp) {
      return;
    }
    setCurrent(current+1)
  }

  const prev = () => {
    setLoading(true)
    // reInitialize()
    setCurrent(current-1)
    setLoading(false)
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleClientData = (key, value) => {
    if(key === 'date') {
      value = JSON.parse(value)
    }
    setClientFormData({
      ...clientFormData,
      [key]: value
    })
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <TextLable>Client </TextLable>
            <Input 
              placeholder="Client Name"
              style={{ width: "100%" }}
              value={clientFormData.client}
              allowClear
              autoFocus
              onChange={(e) => handleClientData('client',e.target.value)}
            />
            <TextLable>Location </TextLable>
            <Input 
              placeholder="Enter location"
              style={{ width: "100%" }}
              value={clientFormData.location}
              allowClear
              onChange={(e) => handleClientData('location',e.target.value)}
            />
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
              <div style={{ width: '45%' }}>
              <TextLable>Cima </TextLable>
              <Input 
                placeholder="Enter Cima #"
                style={{ width: "100%" }}
                value={clientFormData.cima}
                allowClear
                onChange={(e) => handleClientData('cima',e.target.value)}
              />
              </div>
              <div style={{ width: '45%' }}>
              <TextLable>Exam </TextLable>
              <Input 
                placeholder="Enter Exam #"
                style={{ width: "100%" }}
                value={clientFormData.examNumber}
                allowClear
                onChange={(e) => handleClientData('examNumber',e.target.value)}
              />
              </div>
            </div>
            <TextLable>Date </TextLable>
            <DatePicker 
              style={{ width: "100%" }}
              allowClear
              value={clientFormData.date}
              format="YYYY-MM-DD HH:mm" 
              showTime={true} 
              onChange={(e) => handleClientData('date',JSON.stringify(e))}
            />
            <TextLable>Purchase order </TextLable>
            <Input 
              placeholder="Enter purchase order"
              style={{ width: "100%" }}
              value={clientFormData.purchaseOrderNumber}
              allowClear
              onChange={(e) => handleClientData('purchaseOrderNumber',e.target.value)}
            />
          </div>
          <div style={{ width: '48%' }}>
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
              <div style={{ width: '45%' }}>
              <TextLable>Report </TextLable>
              <Input 
                placeholder="Enter Report #"
                style={{ width: "100%" }}
                value={clientFormData.report}
                allowClear
                onChange={(e) => handleClientData('report',e.target.value)}
              />
              </div>
              <div style={{ width: '45%' }}>
              <TextLable>Part </TextLable>
              <Input 
                placeholder="Enter Part #"
                style={{ width: "100%" }}
                value={clientFormData.part}
                allowClear
                onChange={(e) => handleClientData('part',e.target.value)}
              />
              </div>
            </div>
            <TextLable>Specification </TextLable>
            <Input 
              placeholder="Enter specification"
              style={{ width: "100%" }}
              value={clientFormData.specification}
              allowClear
              onChange={(e) => handleClientData('specification',e.target.value)}
            />
            <TextLable>Procedure </TextLable>
            <Input 
              placeholder="Enter procedure"
              style={{ width: "100%" }}
              value={clientFormData.procedure}
              allowClear
              onChange={(e) => handleClientData('procedure',e.target.value)}
            />
            <TextLable>Acceptence Criteria </TextLable>
            <Input 
              placeholder="Enter purchase order"
              style={{ width: "100%" }}
              value={clientFormData.acceptenceCriteria}
              allowClear
              onChange={(e) => handleClientData('acceptenceCriteria',e.target.value)}
            />
          </div>
        </div>
      </Fragment>
    )
  }

  const handlePartData = (key, value) => {
    setPartFormData({
      ...partFormData,
      [key]: value
    })
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
        <div style={{ width: '48%' }}>
            <TextLable>Part Identification <span>*</span></TextLable>
            <Input 
              placeholder="Enter Part Identification"
              style={{ width: "100%" }}
              value={partFormData.partId}
              allowClear
              autoFocus
              onChange={(e) => handlePartData('partId',e.target.value)}
            />
            <TextLable>Surface </TextLable>
            <Input 
              placeholder="Enter surface"
              style={{ width: "100%" }}
              value={partFormData.surface}
              allowClear
              onChange={(e) => handlePartData('surface',e.target.value)}
            />
            <TextLable>PNID # </TextLable>
            <Input 
              placeholder="Enter PNID #"
              style={{ width: "100%" }}
              value={partFormData.pnid}
              allowClear
              onChange={(e) => handlePartData('pnid',e.target.value)}
            />
            <TextLable>DWG # </TextLable>
            <Input 
              placeholder="Enter DWG #"
              style={{ width: "100%" }}
              value={partFormData.dwg}
              allowClear
              onChange={(e) => handlePartData('dwg',e.target.value)}
            />
            <TextLable>Temp </TextLable>
            <Input 
              placeholder="Enter temp"
              style={{ width: "100%" }}
              value={partFormData.temp}
              allowClear
              onChange={(e) => handlePartData('temp',e.target.value)} 
            />
            <TextLable>MTL </TextLable>
            <Input 
              placeholder="Enter MTL"
              style={{ width: "100%" }}
              value={partFormData.mtl}
              allowClear
              onChange={(e) => handlePartData('mtl',e.target.value)}
            />
        </div>
      </Fragment>
    )
  }

  const handleCalibrationData = (key, value) => {
    setCalibrationFormData({
      ...calibrationFormData,
      [key]: value
    })
  }

  const renderCalibrationBlock = () => {
    return (
      <Fragment>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ width: '24%' }}>
            <TitleText
              fontSize={"20px"}
              fontWeight={"600"}
              color={"#000"}
              margin={"10px 0 0 0"}
            >
              Calibration Block
            </TitleText>
            <TextLable>Material </TextLable>
            <Input 
              placeholder="Enter material"
              style={{ width: "100%" }}
              value={calibrationFormData.material}
              allowClear
              autoFocus
              onChange={(e) => handleCalibrationData('material',e.target.value)}
            />
            <TextLable>Surface </TextLable>
            <Input 
              placeholder="Enter surface"
              style={{ width: "100%" }}
              value={clientFormData.surface}
              allowClear
              onChange={(e) => handleCalibrationData('surface',e.target.value)}
            />
          </div>
          <div style={{ width: '24%' }}>
            <TitleText
              fontSize={"20px"}
              fontWeight={"600"}
              color={"#000"}
              margin={"10px 0 0 0"}
            >
              Ultrasonic Equipment
            </TitleText>
            <TextLable>Model # </TextLable>
            <Input 
              placeholder="Enter model #"
              style={{ width: "100%" }}
              value={clientFormData.ueModel}
              allowClear
              onChange={(e) => handleCalibrationData('ueModel',e.target.value)}
            />
            <TextLable>Serial # </TextLable>
            <Input 
              placeholder="Enter serial #"
              style={{ width: "100%" }}
              value={clientFormData.ueSerial}
              allowClear
              onChange={(e) => handleCalibrationData('ueSerial',e.target.value)}
            />
          </div>
          <div style={{ width: '24%' }}>
            <TitleText
              fontSize={"20px"}
              fontWeight={"600"}
              color={"#000"}
              margin={"10px 0 0 0"}
            >
              Probe
            </TitleText>
            <TextLable>Probe Model # </TextLable>
            <Input 
              placeholder="Enter probe model #"
              style={{ width: "100%" }}
              value={clientFormData.probeModel}
              allowClear
              onChange={(e) => handleCalibrationData('probeModel',e.target.value)}
            />
            <TextLable>Probe Serial # </TextLable>
            <Input 
              placeholder="Enter probe serial #"
              style={{ width: "100%" }}
              value={clientFormData.probeSerial}
              allowClear
              onChange={(e) => handleCalibrationData('probeSerial',e.target.value)}       
            />
          </div>
        </div>
      </Fragment>
    )
  }

  const saveFormData = async () => {
    const url  = {
      0: {
        payload: clientFormData,
        endpoint: 'http://localhost:8080/api/client/clientData'
      },
      1: {
        payload: partFormData,
        endpoint: 'http://localhost:8080/api/client/partData'
      },
      2: {
        payload: calibrationFormData,
        endpoint: 'http://localhost:8080/api/client/calibrationData'            
      }

    }
    let method = 'POST';
    let message = 'Data saved successfully';
    let clientId = window.localStorage.getItem('clientId');

    if(current === 0 && clientId){
      url[current].endpoint = `http://localhost:8080/api/client/clientData/${clientId}`
      method = 'PUT';
      message = 'Data updated successfully';
    }else if(current === 1){
      if(partFormData.partId == undefined || partFormData.partId == ''){
        sendNotification('error', 'Please enter part identification',  3)
        return false;
      }
    }
    const response = await fetch(url[current].endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },    
      body: JSON.stringify(url[current].payload),
    }).then(res => res.json())
    if(response?.error == 1){
      sendNotification('error', response?.message,  3)
      return false;
    }
    if(current == 0) {
      window.localStorage.setItem('clientId', response?.id)
    }
    sendNotification('success', message,  3)
    return true;
  }

  const handleDone = async () => {
    const resp = await saveFormData();
    if(!resp) {
      return;
    }
    navigate('/new-inspection')
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
      {loading ? <Loader /> : <>
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
      </>}
    </Container>
  )
}

export default AddInspection;