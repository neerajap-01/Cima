import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Collapse, Modal, Input, Button } from 'antd'
import React, { useState, useEffect } from 'react'
import TableData from '../../components/Table'
import { Container, Main, TitleText } from '../HomePage/styles'
import { sendNotification } from '../../services/notificationService'

const { Panel } = Collapse

const SearchResult = () => {
  const [activePanelKey, setActivePanelKey] = useState(['1'])
  const [searchModal, setSearchModal] = useState(true);
  const [clientName, setClientName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [clientTableData, setClientTableData] = useState([])
  const [partTableData, setPartTableData] = useState([])
  const [calibrationTableData, setCalibrationTableData] = useState([])
  const [inspectionTableData, setInspectionTableData] = useState([])

  const handleSearchModal = () => {
    setIsLoading(true)
    const init = async () => {
      const userId = window.localStorage.getItem('userId')
      const response = await fetch(`http://localhost:8080/api/client/search/${userId}/${clientName}`).then(res => res.json());
      if(response?.error === 1){
        setIsLoading(false);
        sendNotification('error', response.message, 3)
        return;
      }
      sendNotification('success', 'Search result found', 5)
      setSearchModal(false)
      setClientTableData([response.clientData])
      setPartTableData([response.partData])
      setCalibrationTableData([response.calibrationData])
      setInspectionTableData(response.inspectionList)
      setIsLoading(false);
    }
    init()
  }

  useEffect(() => {
    
  }, [])

  const CLIENT_TABLE_COLUMNS = [
    {
      title: 'Client',
      dataIndex: 'clientName',
      key: 'clientName',
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
      title: "Purchase Order #",
      dataIndex: "purchaseOrderNumber",
      key: "part",
      align: "center",
    },
    {
      title: "Cima",
      dataIndex: "cima",
      key: "cima",
      align: "center",
    },
    {
      title: "Exam Number",
      dataIndex: "examNumber",
      key: "examNumber",
      align: "center",
    },
    {
      title: "Part",
      dataIndex: "part",
      key: "part",
      align: "center",
    },
    {
      title: "Report",
      dataIndex: "report",
      key: "report",
      align: "center",
    },
    {
      title: "Specification",
      dataIndex: "specification",
      key: "specification",
      align: "center",
    },
    {
      title: "Procedure",
      dataIndex: "procedure",
      key: "procedure",
      align: "center",
    },
    {
      title: "Acceptance Criteria",
      dataIndex: "acceptanceCriteria",
      key: "acceptanceCriteria",
      align: "center",
    },
  ]

  const PARTDATA_TABLE_COLUMNS = [
    {
      title: 'Part Identification',
      dataIndex: 'partId',
      key: 'partId',
      align: 'center',
    },
    {
      title: "Surface",
      dataIndex: "surface",
      key: "surface",
      align: "center",
    },
    {
      title: "DWG",
      dataIndex: "dwg",
      key: "dwg",
      align: "center",
    },
    {
      title: "Temp",
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
  ]
  
  const CALIBRATION_TABLE_COLUMNS = [
    {
      title: 'Material',
      dataIndex: 'material',
      key: 'material',
      align: 'center',
    },
    {
      title: "Surface",
      dataIndex: "surface",
      key: "surface",
      align: "center",
    },
    {
      title: "UltraSonic Equipment Model",
      dataIndex: "ueModel",
      key: "ueModel",
      align: "center",
    },
    {
      title: "UltraSonic Equipment Serial",
      dataIndex: "ueSerial",
      key: "ueSerial",
      align: "center",
    },
    {
      title: "Probe Model",
      dataIndex: "probeModel",
      key: "probeModel",
      align: "center",
    },
    {
      title: "Probe Serial",
      dataIndex: "probeSerial",
      key: "probeSerial",
      align: "center",
    },
    {
      title: "Velocity",
      dataIndex: "velocity",
      key: "velocity",
      align: "center",
    },
    {
      title: "Delay",
      dataIndex: "delay",
      key: "delay",
      align: "center",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
      align: "center",
    },
  ]

  const INSPECTION_TABLE_COLUMNS = [
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
      dataIndex: 'minThick',
      key: 'minThick',
      align: 'center',
    },
  ];

  const getColumns = (key) => {
    const renderColumns = {
      '1': CLIENT_TABLE_COLUMNS,
      '2': PARTDATA_TABLE_COLUMNS,
      '3': CALIBRATION_TABLE_COLUMNS,
      '4': INSPECTION_TABLE_COLUMNS
    }
    return renderColumns[key[0]];
  }
  return (
    <>
      <Container>
        <Breadcrumb>
            <Breadcrumb.Item href='/'>
              <HomeOutlined />
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
        <Collapse
          onChange={(e) => setActivePanelKey(e)}
          accordion
        >
          <Panel header="Client Data Table" key="1">
            <TableData 
              columns={getColumns(activePanelKey)}
              dataSource={clientTableData}
              pagination={true}
              width="100%"
            />
          </Panel>
          <Panel header="Part Data Table" key="2">
            <TableData 
              columns={getColumns(activePanelKey)}
              dataSource={partTableData}
              pagination={true}
              width="100%"
            />
          </Panel>
          <Panel header="Calibration Data Table" key="3">
            <TableData 
              columns={getColumns(activePanelKey)}
              dataSource={calibrationTableData}
              pagination={true}
              width="100%"
            />
          </Panel>
          <Panel header="Inspection Data Table" key="4">
            <TableData 
              columns={getColumns(activePanelKey)}
              dataSource={inspectionTableData}
              pagination={true}
              width="100%"
            />
          </Panel>
        </Collapse>
      </Container>
      <Modal
        title="Search"
        open={searchModal}
        footer={[
          <Button 
            key="submit" 
            type="primary" 
            onClick={handleSearchModal}
            loading={isLoading}
          >
            Go Home
          </Button>,
        ]}
      >
        <p className="search-title">
            Client Name <span>*</span>
        </p>
        <Input 
          autoFocus
          style={{ marginBottom: "1em" }}
          allowClear
          placeholder="Enter Client Name"
          onChange={(e) => setClientName(e.target.value)}
        />
        {/* <p className="search-title">
            Location <span>*</span>
        </p>
        <Input 
          autoFocus
          style={{ marginBottom: "1em" }}
          allowClear
          placeholder="Enter location"
        />
        <p className="search-title">
            Date <span>*</span>
        </p>
        <DatePicker /> */}
      </Modal>
    </>
  )
}

export default SearchResult