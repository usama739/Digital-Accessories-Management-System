/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button, Space,Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../pages/css/ProductList.css';


const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [minStock, setMinStock] = useState('');
  const [maxStock, setMaxStock] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products/getproducts');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const applyFilters = () => {
    let filteredList = products;

    // Apply category filter
    if (categoryFilter) {
      filteredList = filteredList.filter(product => product.category === categoryFilter);
    }

    // Apply stock filters
    if (minStock) {
      filteredList = filteredList.filter(product => product.stock >= parseInt(minStock, 10));
    }
    if (maxStock) {
      filteredList = filteredList.filter(product => product.stock <= parseInt(maxStock, 10));
    }

    // Apply price filters
    if (minPrice) {
      filteredList = filteredList.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredList = filteredList.filter(product => product.price <= parseFloat(maxPrice));
    }

    // Apply search keyword filter
    if (searchKeyword) {
      filteredList = filteredList.filter(product =>
        product.productName.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    setFilteredProducts(filteredList);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <Image src={`data:image/png;base64,${image}`} width={50} />,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products List</h1>
      <Space style={{ marginBottom: 16 }}>
        <Input placeholder="Search by name" onChange={(e) => setSearchKeyword(e.target.value)} />
        <Input placeholder="Category" onChange={(e) => setCategoryFilter(e.target.value)} />
        <Input placeholder="Min Stock" onChange={(e) => setMinStock(e.target.value)} />
        <Input placeholder="Max Stock" onChange={(e) => setMaxStock(e.target.value)} />
        <Input placeholder="Min Price" onChange={(e) => setMinPrice(e.target.value)} />
        <Input placeholder="Max Price" onChange={(e) => setMaxPrice(e.target.value)} />
        <Button type="primary" icon={<SearchOutlined />} onClick={applyFilters}>
          Apply Filters
        </Button>
      </Space>
      <Table dataSource={filteredProducts.length > 0 ? filteredProducts : products} columns={columns} />
    </div>
  );
};
/* eslint-enable */
export default ProductsList;
