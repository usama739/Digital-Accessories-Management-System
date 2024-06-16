
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button, Space, Select, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../pages/css/ProductList.css';



const { Option } = Select;

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch products and Customers from the server
    const fetchData = async () => {
      try {
        const CustomersResponse = await axios.get('http://localhost:3001/get-users');
        setCustomers(CustomersResponse.data.customers);
      } catch (error) {
        console.error('Error fetching Customers:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 100  }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()), // Case-insensitive search
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'), // Enable search for 'Name' column
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Customers List</h1>
      <Table dataSource={customers.length > 0 ? customers : customers} columns={columns} />
    </div>
  );
};
/* eslint-enable */
export default Customers;
