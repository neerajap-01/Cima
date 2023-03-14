import React, { useState } from 'react'
import { Container, Main, TitleText } from '../HomePage/styles'
import { Breadcrumb, Button , Form, Input, InputNumber, Modal, Select} from 'antd'
import { HomeOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons'
import TableData from '../../components/Table'
import { useNavigate } from 'react-router-dom'

const NewInspection = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [addMeasurementData, setAddMeasurementData] = useState({})
  const [tableData, setTableData] = useState([])
  const columns = [
    {
      title: 'TML',
      dataIndex: 'tml',
      key: 'tml',
      align: 'center',
    },
    {
      title: '1(Elbow)',
      dataIndex: 'elbow',
      key: 'elbow',
      align: 'center',
    }
  ];

  const handleAddMeasure = () => {
    setTableData([...tableData, addMeasurementData])
    setVisible(false)
  }

  const handleOnSubmit = () => {
    navigate('/result')
  }

  const handleAddMeasurement = (type,e) => {
    let newMeasurement = {};
    if(type === 'select'){
      newMeasurement["tml"] = e;
    } else {
      newMeasurement["elbow"] = e.target.value;
    }
    setAddMeasurementData({...addMeasurementData, ...newMeasurement})
  }

  const selectMeasurement = () => {
    const measurements = ["North", "South", "East", "West", "North East", "North West", "South East", "South West"]
    return (
      <Select
        placeholder='Select measurement'
        allowClear
        showSearch
        filterOption={(input, option) => (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
        onChange={(e) => handleAddMeasurement("select",e)}
      >
        {measurements.map((measurement) => (
          <Select.Option key={measurement} value={measurement}>
            {measurement}
          </Select.Option>
        ))}
      </Select>
    )
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
          onClick={() => setVisible(true)}
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
        visible={visible}
        footer={
          [
          <Button key="back" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddMeasure}>
            <PlusOutlined /> Add
          </Button>,
          ]
        }
      >
        <Form
          name='add-measurement'
          layout='vertical'
        >
          <Form.Item
            label='TML'
            name='tml'
            rules={[
              {
                required: true,
                message: 'Please input TML!'
              }
            ]}
          >
            <Input 
              defaultValue="1(Elbow)"
              disabled={true}
            />
          </Form.Item>
          <Form.Item
            label='Selct Measurement'
            name='measurement'
            rules={[
              {
                required: true,
                message: 'Please select measurement!'
              }
            ]}
          >
            <InputNumber
              type="number"
              placeholder='Enter measurement in number'
              addonBefore={selectMeasurement()}
              onBlur={(e) => handleAddMeasurement("number",e)}
              style={{width: '100%'}}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default NewInspection