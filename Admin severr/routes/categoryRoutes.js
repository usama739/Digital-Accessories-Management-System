const express = require('express');
const multer = require('multer');
const router = express.Router();
const Category = require('../schema/categories');

const storage = multer.memoryStorage(); // Store image data in memory as Buffer
const upload = multer({ storage: storage });

// Endpoint to add a new category
router.post('/addcategory', upload.single('image'), async (req, res) => {
  const { categoryName, categoryDescription } = req.body;
  const image = req.file.buffer; // Binary image data stored in req.file.buffer
  console.log(categoryName,categoryDescription,image);
  try {
    const newCategory = new Category({
      categoryName,
      categoryDescription,
      image,
    });

    await newCategory.save();
    console.log('Category added successfully');
    res.status(201).json({ message: 'Category added successfully' });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Error adding category' });
  }
});

// Endpoint to get all categories
router.get('/get-categories', async (req, res) => {
  try {
    const categories = await Category.find();
    const categoryWithBase64Images = categories.map(category => ({
        ...category.toObject(),
        image: category.image.toString('base64'),
      }));
    res.json({ categories:categoryWithBase64Images });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Error fetching categories' });
  }
});

module.exports = router;
