import { Table } from 'antd'
import React from 'react'

const TableData = (props) => {
  const { columns, dataSource } = props
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={props.pagination || false}
      style={{
        width: props.width ? props.width : 'none'
      }}
    />
  )
}

export default TableData