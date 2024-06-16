const express=require('express')
const router=express.Router()
const User = require('../schema/users')
const Product=require('../schema/products')
const CartItem = require('../schema/Cart')
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/add-product', upload.single('image'), (req, res) => {
    const { productName, description, stock, price, category } = req.body;
    const image = req.file.buffer; // Get the uploaded image as a Buffer
  
    const newProduct = new Product({
      productName,
      description,
      stock,
      price,
      category,
      image,
    });
  
    newProduct.save().then((product)=>{
        res.status(201).json({
            message: 'Product added successfully',
            product: product,
          });
    }).catch((error)=>{
        console.error('Error saving product:', error);
  res.status(500).json({
    message: 'Error adding product',
    error: error.message // Include the error message for debugging purposes
  });
});
});

router.get('/getproducts', async (req, res) => {
    try {
      const products = await Product.find();
      const productsWithBase64Images = products.map(product => ({
        ...product.toObject(),
        image: product.image.toString('base64'),
      }));
      res.json({ products:productsWithBase64Images });
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  });

module.exports=router;


// Endpoint to get balance sheet
router.get('/balance-sheet', async (req, res) => {
  try {
    const allUsers = await User.find();
    const allProducts = await Product.find();
    const allCartItems = await CartItem.find().populate('productid');

    // Calculate total revenue, expenses, and profit
    const totalRevenue = allCartItems.reduce((total, cartItem) => total + cartItem.totalPrice, 0);
    const totalExpenses = allProducts.reduce((total, product) => total + product.price, 0);
    const totalProfit = totalRevenue - totalExpenses;

    // Count the number of users, products, and cart items
    const totalUsers = allUsers.length;
    const totalProducts = allProducts.length;
    const totalCartItems = allCartItems.length;

    const balanceSheet = {
      totalUsers,
      totalProducts,
      totalCartItems,
      totalRevenue,
      totalExpenses,
      totalProfit,
    };

    res.json({ balanceSheet });
  } catch (error) {
    console.error('Error fetching balance sheet:', error);
    res.status(500).json({ error: 'Failed to fetch balance sheet' });
  }
});
