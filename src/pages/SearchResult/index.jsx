import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import React from 'react'
import TableData from '../../components/Table'
import { Container, Main, TitleText } from '../HomePage/styles'

const SearchResult = () => {
  const columns = [
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      align: 'center',
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      align: "center",
    },
    {
      title: "Part#/ Report#",
      dataIndex: "part",
      key: "part",
      align: "center",
    },
    {
      title: "Part Identification",
      dataIndex: "partIdentification",
      key: "partIdentification",
      align: "center",
    },
    {
      title: "Procedure",
      dataIndex: "procedure",
      key: "procedure",
      align: "center",
    },
    {
      title: "PNID #",
      dataIndex: "pnid",
      key: "pnid",
      align: "center",
    },
    {
      title: "DWG #",
      dataIndex: "dwg",
      key: "dwg",
      align: "center",
    },
    {
      title: "TEMP",
      dataIndex: "temp",
      key: "temp",
      align: "center",
    },
    {
      title: "MTL",
      dataIndex: "mtl",
      key: "mtl",
      align: "center",
    },
    {
      title: "Velocity",
      children: [
        {
          title: "Velocity",
          dataIndex: "velocity",
          key: "velocity",
          align: "center",
        }
      ]
    },
    {
      title: "Calibration Block",
      children: [
        {
          title: "Material",
          dataIndex: "material",
          key: "material",
          align: "center",
        },
        {
          title: "Surface",
          dataIndex: "surface",
          key: "surface",
          align: "center",
        },
      ]
    },
    {
      title: "Ultrasonic Equipment",
      children: [
        {
          title: "Model #",
          dataIndex: "model",
          key: "model",
          align: "center",
        },
        {
          title: "Serial #",
          dataIndex: "serial",
          key: "serial",
          align: "center",
        }
      ]
    },
    {
      title: "Probe",
      children: [
        {
          title: "Model #",
          dataIndex: "probeModel",
          key: "probeModel",
          align: "center",
        },
        {
          title: "Serial #",
          dataIndex: "probeSerial",
          key: "probeSerial",
          align: "center",
        },
        {
          titile: "Velocity",
          dataIndex: "probeVelocity",
          key: "probeVelocity",
          align: "center",
        }
      ]
    }
  ]

  return (
    <Container>
      <Breadcrumb>
          <Breadcrumb.Item href='/'>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href='/add-inspection'>
            Add Inspection
          </Breadcrumb.Item>
          <Breadcrumb.Item href='/new-inspection'>
            New Inspection
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Search Result
          </Breadcrumb.Item>
        </Breadcrumb>
        <Main>
          <TitleText
            fontSize={"53px"} 
            fontWeight={"700"}
          >
            Search Result
          </TitleText>
        </Main>
        <TableData 
          columns={columns}
          dataSource={[]}
          pagination={true}
        />
    </Container>
  )
}

export default SearchResult