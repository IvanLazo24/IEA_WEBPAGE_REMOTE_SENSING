import React from 'react';
import {Table } from 'antd';
import "./TableLeafStyle.css"

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    width:'20%',
  },
  {
    title: 'Sci Name',
    dataIndex: 'sci_name',
    render: (text) => <i>{text}</i>,
    width:'20%',
  },
  {
    title: 'Family',
    dataIndex: 'family',
  },
];
const data = [
  {
    key: '1',
    name: 'Eucalipto',
    sci_name: 'Eucalyptus',
    family: 'Myrtaceae',
  },
  {
    key: '2',
    name: 'Jim Green',
    sci_name: 42,
    family: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    sci_name: 32,
    family: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    sci_name: 99,
    family: 'Sydney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
  getSelection: (record) => ({
    selectedRowKeys: record.key === '1'
  })
};
const TableLeaf = () => {
  return (
    <div>
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default TableLeaf;
