import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AddProduct.css'
import axios from 'axios';
import 'react-notifications-component/dist/theme.css';
import { message } from 'antd';

/* eslint-disable */

const AddProduct = () => {

    const [categoryName, setcategoryName] = useState('');
    const [categoryDescription, setcategoryDescription] = useState('');
    const [image, setImage] = useState(null);
  
    const handleFormSubmit =async (e) => {
      e.preventDefault();
      // Handle form submission logic here, including image upload
      const formData = new FormData();
      formData.append('categoryName', categoryName);
      formData.append('categoryDescription', categoryDescription);
      formData.append('image', image);
      // Send formData to your backend API for further processing
      try {
        const response = await axios.post('http://localhost:4000/categories/addcategory', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        message.success('Category Added Successfuly') 
      } catch (error) {
        console.error('Error adding category:', error); // Handle error
        message.error('Error adding category')
      }
    };
  
    return (
      <div>
       <h2>Add Category</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Category Name:</label>
            <input
              type="text"
              className="form-control"
              value={categoryName}
              onChange={(e) => setcategoryName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>categoryDescription:</label>
            <textarea
              className="form-control"
              value={categoryDescription}
              onChange={(e) => setcategoryDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category Logo:</label>
            <br></br>
            <input
              type="file"
              className="form-control-file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Add Category
          </button>
        </form>
      </div>
    );
}
/* eslint-enable */
export default AddProduct
