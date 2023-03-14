import { Table } from 'antd'
import React from 'react'

const TableData = (props) => {
  const { columns, dataSource } = props
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={props.pagination || false}
    />
  )
}

export default TableData