const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer, // Store image as Buffer data in MongoDB
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
