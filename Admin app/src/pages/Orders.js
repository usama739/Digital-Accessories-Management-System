import React, { useEffect, useState } from 'react';
import { Table, Image, Input, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const PlacedOrdersTable = () => {
  const [placedOrders, setPlacedOrders] = useState([]);
  const [filters, setFilters] = useState({
    userName: '',
    minPrice: null,
    maxPrice: null,
    categoryName: '',
    productName: '',
    sortBy: 'quantity' // Default sort by quantity, change it as per your requirements
  });

  useEffect(() => {
    const fetchPlacedOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/placed-orders');
        setPlacedOrders(response.data.placedOrders);
      } catch (error) {
        console.error('Error fetching placed orders:', error);
      }
    };

    fetchPlacedOrders();
  }, []);

  const handleFilterChange = (filterKey, value) => {
    setFilters({ ...filters, [filterKey]: value });
  };

  const filteredOrders = placedOrders.filter(order => {
    const { userName, minPrice, maxPrice, categoryName, productName } = filters;
    return (
      order.name.toLowerCase().includes(userName.toLowerCase()) &&
      (minPrice === null || order.price >= minPrice) &&
      (maxPrice === null || order.price <= maxPrice) &&
      order.category.toLowerCase().includes(categoryName.toLowerCase()) &&
      order.productName.toLowerCase().includes(productName.toLowerCase())
    );
  });

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Product Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <Image src={image} width={50} />
    }
  ];

  return (
    <div>
      <div>
        <Input
          style={{ width: '160px', marginRight: '8px',marginLeft: '8px' }}
          placeholder="Search by User Name"
          value={filters.userName}
          onChange={e => handleFilterChange('userName', e.target.value)}
        />
        <Input
          style={{ width: '160px', marginRight: '8px' ,marginLeft: '8px'}}
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={e => handleFilterChange('minPrice', e.target.value === '' ? null : parseFloat(e.target.value))}
        />
        <Input
        style={{ width: '160px', marginRight: '8px',marginLeft: '8px' }}
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={e => handleFilterChange('maxPrice', e.target.value === '' ? null : parseFloat(e.target.value))}
        />
        <Input
        style={{ width: '160px', marginRight: '8px',marginLeft: '8px' }}
          placeholder="Search by Category Name"
          value={filters.categoryName}
          onChange={e => handleFilterChange('categoryName', e.target.value)}
        />
        <Input
        style={{ width: '160px', marginRight: '8px' ,marginLeft: '8px'}}
          placeholder="Search by Product Name"
          value={filters.productName}
          onChange={e => handleFilterChange('productName', e.target.value)}
        />
      </div>
      <Table style={{marginTop:20 }} dataSource={filteredOrders} columns={columns} />
    </div>
  );
};

export default PlacedOrdersTable;
