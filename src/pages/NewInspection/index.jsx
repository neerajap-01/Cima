import React, { useState } from 'react'
import { Container, Main, TitleText } from '../HomePage/styles'
import { Breadcrumb, Button , Input, DatePicker, Modal, Select, InputNumber} from 'antd'
import { CheckCircleOutlined, HomeOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import TableData from '../../components/Table'
import { useNavigate } from 'react-router-dom'
import { SuccesModal, TextLable } from './styles'
import { sendNotification } from '../../services/notificationService'

const { confirm } = Modal

const NewInspection = () => {
  const navigate = useNavigate()
  const [modalActive, setModalActive] = useState(false)
  const [addMeasurementData, setAddMeasurementData] = useState({
    clientId: window.localStorage.getItem('clientId'),
  })
  const [tableData, setTableData] = useState([])
  const [successModal, setSuccessModal] = useState(false)
  const columns = [
    {
      title: 'TML',
      dataIndex: 'tml',
      key: 'tml',
      align: 'center',
    },
    {
      title: 'North',
      dataIndex: 'north',
      key: 'north',
      align: 'center',
    },
    {
      title: 'South',
      dataIndex: 'south',
      key: 'south',
      align: 'center',
    },
    {
      title: 'East',
      dataIndex: 'east',
      key: 'east',
      align: 'center',
    },
    {
      title: 'West',
      dataIndex: 'west',
      key: 'west',
      align: 'center',
    },
    {
      title: 'Top',
      dataIndex: 'top',
      key: 'top',
      align: 'center',
    },
    {
      title: 'Bottom',
      dataIndex: 'bottom',
      key: 'bottom',
      align: 'center',
    },
    {
      title: 'Inside',
      dataIndex: 'inside',
      key: 'inside',
      align: 'center',
    },
    {
      title: 'Outside',
      dataIndex: 'outside',
      key: 'outside',
      align: 'center',
    },
    {
      title: 'Nominal',
      dataIndex: 'nominal',
      key: 'nominal',
      align: 'center',
    },
    {
      title: 'Thick',
      dataIndex: 'thick',
      key: 'thick',
      align: 'center',
    },
  ];

  const handleAdd = () => {
    if(addMeasurementData.tml === undefined || addMeasurementData.tml === '') {
      sendNotification('error', 'Please enter TML', 3)
      return;
    }
    setTableData([...tableData, addMeasurementData])
    setModalActive(false)
  }

  const handleOnSubmit =  async () => {
    if(tableData.length === 0) {
      sendNotification('error', 'Please add measurement', 3)
      return;
    }
    confirm({
      title: "Are you sure you want to submit the data?",
      content: "You won't be able to change the data again!!",
      okText: "Confirm",
      okType: "primary",
      cancelText: "Cancel",
      onOk: async () => {
        const response = await fetch('http://localhost:8080/api/client/inspections', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tableData)
        }).then(res => res.json())
        if(response.length > 0) {
          setSuccessModal(true)
        }
      },
    });
  }

  const handleAddMeasurement = (type,e) => {
    setAddMeasurementData({
      ...addMeasurementData,
      [type]: e
    })
  }

  const handleOpenMeasurementModal = () => {
    setAddMeasurementData({
      clientId: window.localStorage.getItem('clientId'),
    })
    setModalActive(true)
  }

  return (
    <>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href='/add-inspection'>
            Add Inspection
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            New Inspection
          </Breadcrumb.Item>
        </Breadcrumb>
        <Main>
        <TitleText
            fontSize={"53px"} 
            fontWeight={"700"}
          >
            New Inspection
          </TitleText>
        </Main>
        <Button
          type="primary"
          style={{marginBottom: '20px'}}
          onClick={handleOpenMeasurementModal}
        >
          <PlusOutlined /> Add Measurement
        </Button>
        <Button
          type="primary"
          style={{marginBottom: '20px', right: '10px', position: 'absolute'}}
          onClick={handleOnSubmit}
        >
          <SaveOutlined/> Submit
        </Button>
        <TableData 
          columns={columns}
          dataSource={tableData}
        />
      </Container>
      <Modal 
        title="Add Measurement"
        open={modalActive}
        onCancel={() => setModalActive(false)}
        footer={[
          <Button key="back" onClick={() => setModalActive(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAdd}>
            Add
          </Button>,
        ]}
      >
        <TextLable>TML <span>*</span></TextLable>
        <Input 
          placeholder="Enter TML"
          value={addMeasurementData.tml}
          style={{ width: "100%" }}
          allowClear
          autoFocus
          onChange={(e) => handleAddMeasurement('tml',e.target.value)}
        />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ width: '48%' }}>
            <TextLable>North</TextLable>
            <InputNumber
              placeholder="Enter north"
              style={{ width: "100%" }}
              value={addMeasurementData.north}
              type="number"
              controls={false}
              allowClear
              onChange={(e) => handleAddMeasurement('north',e)}
            />
            <TextLable>South </TextLable>
            <InputNumber
              placeholder="Enter south"
              style={{ width: "100%" }}
              value={addMeasurementData.south}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('south',e)}
            />
            <TextLable>East </TextLable>
            <InputNumber
              placeholder="Enter east"
              style={{ width: "100%" }}
              value={addMeasurementData.east}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('east',e)}
            />
            <TextLable>West </TextLable>
            <InputNumber
              placeholder="Enter west"
              style={{ width: "100%" }}
              value={addMeasurementData.west}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('west',e)}
            />
            <TextLable>Top</TextLable>
              <InputNumber
                placeholder="Enter top"
                style={{ width: "100%" }}
                value={addMeasurementData.top}
                allowClear
                type="number"
              controls={false}
                onChange={(e) => handleAddMeasurement('top',e)}
              />
          </div>
          <div style={{ width: '48%' }}>
            <TextLable>Bottom</TextLable>
            <InputNumber
              placeholder="Enter bottom"
              style={{ width: "100%" }}
              value={addMeasurementData.bottom}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('bottom',e)}
            />
            <TextLable>Inside </TextLable>
            <InputNumber
              placeholder="Enter inside"
              style={{ width: "100%" }}
              value={addMeasurementData.inside}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('inside',e)}
            />
            <TextLable>Outside </TextLable>
            <InputNumber
              placeholder="Enter outside"
              style={{ width: "100%" }}
              value={addMeasurementData.outside}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('outside',e)}
            />
            <TextLable>Nominal </TextLable>
            <InputNumber
              placeholder="Enter nominal"
              style={{ width: "100%" }}
              value={addMeasurementData.nominal}
              allowClear
              type="number"
              controls={false}
              onChange={(e) => handleAddMeasurement('nominal',e)}
            />
            <TextLable>Thick</TextLable>
              <InputNumber
                placeholder="Enter thick"
                style={{ width: "100%" }}
                value={addMeasurementData.minThick}
                allowClear
                type="number"
                controls={false}
                onChange={(e) => handleAddMeasurement('minThick',e)}
              />
          </div>
        </div>
      </Modal>
      <Modal
        title="Inspection Added"
        open={successModal}
        footer={[
          <Button key="submit" type="primary" onClick={() => navigate('/')}>
            Go Home
          </Button>,
        ]}
      >
        <SuccesModal>
          <CheckCircleOutlined 
            style={{ fontSize: '100px', color: '#52c41a' }}
          />
          <h2>Your inspection data have been added</h2>
        </SuccesModal>
      </Modal>
    </>
  )
}

export default NewInspection