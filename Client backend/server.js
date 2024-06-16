let Usermodel = require('./models');
let Product = require('./ProductsModel');
let CartItem = require('./CartModel');
let bodyParser = require('body-parser');
let express = require('express');
const cors = require('cors');
let app = express();


const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const port = 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors())



app.post('/signup', async(req, res) => {
    // console.log(req.body);                      /// {name: '...', email: '...', password: '...'}
    const {name, email, password} = req.body;

    const user =  await Usermodel.findOne({ email: email });

    if (user) {
        // User already exists with the provided email
        console.log('User already exists');
        res.status(400).json({ message: 'User already exists' });
    } else {
        // User with the provided email doesn't exist, you can proceed with insertion
        const user = new Usermodel({name:name, email: email  , password: password });
        user.save()
        .then((savedUser) => {
            console.log('User saved successfully');
            res.status(201).json({ message: 'User saved successfully', Userid: savedUser._id });;
        })
        .catch((error) => {
            console.log('Error saving user:', error);
        });
    }        
});




app.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user =  await Usermodel.findOne({ email: email });
    const userid = user._id;
    if (!user) {
        console.log('User not found');
        res.status(401).json({ message: 'Authentication failed' });
    }
    else{
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                console.error(err);
                return;
            }
        
            else if (!isMatch) {
                console.log('Invalid password');
                res.status(401).json({ message: 'Authentication failed' });
            }
            else{
                console.log('User authenticated');
                res.status(200).json({ message: 'Authentication successful', userid: userid });
            }
            
        });
    }

});





app.post('/add-product', upload.single('image'), (req, res) => {
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



app.get('/products/getproducts', async (req, res) => {
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



  app.get('/get-users', async (req, res) => {
    try {
      const customers = await Usermodel.find();
      res.json({ customers:customers });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  });

  

  app.get('/placed-orders', async (req, res) => {
    try {
      const orders = await CartItem.find()
        .populate({
          path: 'productid',
          model: Product,
          select: 'productName category price image' // Fields you want to select from Product collection
        })
        .populate({
          path: 'userid',
          model: Usermodel,
          select: 'name' // Fields you want to select from User collection
        });

  
      // Transform orders data as needed before sending it to the frontend
      const placedOrders = orders.map(order => ({
        productName: order.productid.productName,
        category: order.productid.category,
        price: order.productid.price,
        name: order.userid.name,
        quantity: order.quantity,
        image: `data:image/png;base64,${order.productid.image.toString('base64')}`
      }));
  
      res.json({ placedOrders });
    } catch (error) {
      console.error('Error fetching placed orders:', error);
      res.status(500).json({ message: 'Error fetching placed orders' });
    }
  });
  



  // Endpoint to add a product to the cart
app.post('/add-to-cart', async (req, res) => {
  try {
    // Extract user and product information from the request
    const { userId, productId, price } = req.body;

    // Check if the item is already in the cart for the user
    const existingCartItem = await CartItem.findOne({ userid: userId, productid: productId });

    if (existingCartItem) {
      // If the item is already in the cart, update the quantity and total price
      existingCartItem.quantity += 1;
      existingCartItem.totalPrice += price;
      await existingCartItem.save();
    } else {

      // Create a new cart item
      const cartItem = new CartItem({
        userid: userId,
        productid: productId,
        quantity: 1, // Set an initial quantity
        totalPrice: price
      });

      // Save the cart item to the database
      await cartItem.save();
    }

    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Failed to add product to cart' });
  }
});



// Endpoint to get the user's cart
app.get('/get-cart', async (req, res) => {
  try {
    // Extract the user ID from the request
    const userId = req.query.userId;

    // Find cart items associated with the user and populate product details
    const cartItems = await CartItem.find({ userid: userId }).populate('productid');


    // Map cart items to include base64 encoded images
    const cartItemsWithBase64Images = await Promise.all(cartItems.map(async (cartItem) => {
      const product = cartItem.productid;
      const productWithBase64Image = {
        ...product.toObject(),
        image: product.image.toString('base64'),
        quantity: cartItem.quantity,
        totalPrice: cartItem.totalPrice,
      };
      return productWithBase64Image;
    }));

    res.json({ cartItems: cartItemsWithBase64Images });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});


// DELETE endpoint for deleting a cart item
app.delete('/delete-cart-item/:itemId', async (req, res) => {
  const { itemId } = req.params;
  const userId = req.query.userId; 

  try {
    // Find the cart item by ID and remove it
    const deletedItem = await CartItem.findByIdAndRemove(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found in the cart.' });
    }

    // Optionally, you can fetch the updated cart items and send them back in the response
    const cartItems = await CartItem.find({ userid: userId }).populate('productid');

    res.json({ cartItems });

    // res.json({ message: 'Item deleted successfully', cartItems: updatedCartItems });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// POST endpoint for updating quantity of an existing cart item
app.put('/update-cart-item/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const newQuantity = req.body.quantity;
    const newPrice = req.body.totalPrice;
    // console.log(newPrice)  

    // Assuming you have a schema similar to the CartItem model
    const updatedCartItem = await CartItem.findOneAndUpdate(
      { _id: itemId },
      { quantity: newQuantity, totalPrice: newPrice },
      { new: true } // Return the updated document
    );

    if (!updatedCartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    // Respond with the updated cart item
    res.json({ quantity: updatedCartItem.quantity });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/get-product-stock/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const cartItem = await CartItem.findById(itemId);
    const productId = cartItem.productid;

    const product = await Product.findById(productId);
    const stock = product.stock;

    res.json({ stock });
  } catch (error) {
    console.error('Error fetching product stock:', error);
    res.status(500).json({ error: 'Failed to fetch product stock' });
  }
});



app.put('/update-product-stock/:itemId/:quantity', async (req, res) => {
  try {
    const { itemId, quantity } = req.params;
    const cartItem = await CartItem.findById(itemId);
    const productId = cartItem.productid;
    const product = await Product.findById(productId);
    const updatedStock = product.stock - quantity;
    await Product.findByIdAndUpdate(productId, { stock: updatedStock });

    res.status(200).json({ message: 'Product stock updated successfully' });
  } catch (error) {
    console.error('Error updating product stock:', error);
    res.status(500).json({ error: 'Failed to update product stock' });
  }
});



// API endpoint to fetch prioritized items
app.get('/prioritized-items', async (req, res) => {
  try {
    // Fetch all carts from the database
    const allCarts = await CartItem.find({}).populate('productid');

    // Calculate total quantities for each product
    const productQuantities = {};
    allCarts.forEach((cart) => {
      const { productid, quantity } = cart;
      const productIdString = productid._id.toString();
      productQuantities[productIdString] = (productQuantities[productIdString] || 0) + quantity;
    });

    // Sort products by total quantity in descending order
    const sortedProducts = Object.keys(productQuantities).sort(
      (a, b) => productQuantities[b] - productQuantities[a]
    );


        // Fetch products with base64 encoded images
        const prioritizedItems = await Promise.all(sortedProducts.map(async (productId) => {
          const product = await Product.findById(productId);
          const productWithBase64Image = {
            ...product.toObject(),
            image: product.image.toString('base64'),
            quantity: productQuantities[productId],
          };
          return productWithBase64Image;
        }));


    res.json({ prioritizedItems });
  } catch (error) {
    console.error('Error fetching prioritized items:', error);
    res.status(500).json({ error: 'Failed to fetch prioritized items' });
  }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});