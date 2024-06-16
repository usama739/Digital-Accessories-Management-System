
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button, Space, Select,Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../pages/css/ProductList.css';


const { Option } = Select;

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products and categories from the server
    const fetchData = async () => {
      try {
        
        const categoriesResponse = await axios.get('http://localhost:4000/categories/get-categories');
        setCategories(categoriesResponse.data.categories);
      } catch (error) {
        console.error('Error fetching products or categories:', error);
      }
    };

    fetchData();
  }, []);

  

  const categoryOptions = categories.map(category => (
    <Option key={category.categoryName} value={category.categoryName}>
      {category.categoryName}
    </Option>
  ));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Description',
      dataIndex: 'categoryDescription',
      key: 'categoryDescription',
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
      <h1>Category List</h1>
      <Table dataSource={categories.length > 0 ? categories : categories} columns={columns} />
    </div>
  );
};
/* eslint-enable */
export default CategoryList;
