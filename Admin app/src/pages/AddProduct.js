import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AddProduct.css'
import axios from 'axios';
import 'react-notifications-component/dist/theme.css';
import { message } from 'antd';

/* eslint-disable */

const AddProduct = () => {

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
  
    const handleFormSubmit =async (e) => {
      e.preventDefault();
      // Handle form submission logic here, including image upload
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('description', description);
      formData.append('stock', stock);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('image', image);
      // Send formData to your backend API for further processing
      try {
        const response = await axios.post('http://localhost:4000/products/add-product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }); 
        message.success('Product Added Successfuly');
      } catch (error) {
        console.error('Error adding product:', error); // Handle error
        message.error('Product Failed To Be Added');
      }
    };
  
    return (
      <div>
       <h2>Add Product</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              className="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Stock:</label>
            <input
              type="number"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="laptop-accessories">Laptop Accessories</option>
              <option value="mobile-covers">Mobile Covers</option>
              <option value="smart-watches">Smart Watches</option>
              <option value="mobile-accessories">Mobile Accessories</option>
              <option value="gaming-accessories">Gaming Accessories</option>
              <option value="car-accessories">Car Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <label>Product Image:</label>
            <input
              type="file"
              className="form-control-file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Add Product
          </button>
        </form>
      </div>
    );
}
/* eslint-enable */
export default AddProduct
