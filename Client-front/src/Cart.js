import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './Components/Footer';
import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar';
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

     // Function to fetch the user's cart
     useEffect(() => {
        const fetchCart = async () => {
            const userId = localStorage.getItem('user');
            try {
                const response = await axios.get(`http://localhost:3001/get-cart?userId=${userId}`);
                setCartItems(response.data.cartItems);
                console.log(response.data.cartItems);

                setCartTotalPrice(calculateTotalPrice(response.data.cartItems));
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };
    
        // Call the fetchCart function within the useEffect
        fetchCart();
    }, []);



    const calculateTotalPrice = (cartItems) => {
        let total = 0;
      
        cartItems.forEach(item => {
          total += item.totalPrice;
        });
        
        return total;
    };
    

    const handleDeleteItem = async (itemId) => {
        try {
          const userId = localStorage.getItem('user');
          // Make a request to your server to delete the item from the cart
          const response = await axios.delete(`http://localhost:3001/delete-cart-item/${itemId}?userId=${userId}`);
          
          // Update the state to reflect the changes
          setCartItems(response.data.cartItems);

          setCartTotalPrice(calculateTotalPrice(response.data.cartItems));
          
        } catch (error) {
          console.error('Error deleting item:', error);
        }
    };
    

      
    const stockofProduct = async (itemId) => {
        try {
            // Make a request to your server to get the stock of the product
            const response = await axios.get(`http://localhost:3001/get-product-stock/${itemId}`);
            
            // Assuming your server responds with the stock value
            return response.data.stock;
        } catch (error) {
            console.error('Error fetching product stock:', error);
            return 0;
        }
    };
      


    const decreaseQuantity = async (itemId, currentQuantity, currentItemPrice) => {
        let stock = await stockofProduct(itemId);
        
        if (currentQuantity > 1 && (stock !== 0)) {
            const newQuantity = currentQuantity - 1;
            updateCartItemQuantity(itemId, newQuantity, (currentItemPrice * newQuantity));
        }
    };



    const increaseQuantity = async (itemId, currentQuantity, currentItemPrice) => {
        let stock = await stockofProduct(itemId);

        if (stock !== 0) {
            const newQuantity = currentQuantity + 1;
            updateCartItemQuantity(itemId, newQuantity, (currentItemPrice * newQuantity));
        }
    };



    const updateCartItemQuantity = async (itemId, newQuantity, newTotalPrice) => {
        const userId = localStorage.getItem('user');

        try {
            await axios.put(`http://localhost:3001/update-cart-item/${itemId}`, {
                quantity: newQuantity,
                totalPrice: newTotalPrice
            });

            // After updating the cart item, also update the stock
            updateProductStock(itemId, newQuantity);
            try {
                const response = await axios.get(`http://localhost:3001/get-cart?userId=${userId}`);
                setCartItems(response.data.cartItems);

                setCartTotalPrice(calculateTotalPrice(response.data.cartItems));
            } catch (error) {
                console.error('Error fetching cart:', error);
            }

        } catch (error) {
            console.error('Error updating cart item:', error);
            throw error
        }
    };
  


    const updateProductStock = async (itemId, quantity) => {
        try {
          // Send a PUT request to update the product stock
          const response = await axios.put(`http://localhost:3001/update-product-stock/${itemId}/${quantity}`);
          console.log('Product stock updated successfully:', response.data.message);
        } catch (error) {
          console.error('Error updating product stock:', error);
          throw error;
        }
      };


  return (
    <><div>
        <Navbar/>

        <div style={{backgroundColor: '#b3cccc', marginTop: '80px'}}>
        <section class="h-100 gradient-custom">
            <div class="container py-5">
            <div class="row d-flex justify-content-center my-4">
                <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header py-3">
                    <h5 class="mb-0">Cart - {cartItems.length} items</h5>
                    </div>
                    <div class="card-body">
                    
                    {cartItems.map((item) => ( 
                    <div class="row" key={item._id}>
                        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">

                        {/* <!-- Image --> */}
                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={`data:image/jpeg;base64,${item.image.toString('base64')}`} alt="cart Image" style={{ height: '150px', objectFit: 'cover' }}/>
                        </div>
                        {/* <!-- Image --> */}
                        </div>
        
                        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Data --> */}
                        <p><strong>{item.productName}</strong></p>
                        <button className="btn btn-danger" onClick={() => handleDeleteItem(item._id)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        {/* <!-- Data --> */}
                        </div>
        
                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Quantity --> */}
                        <div class="d-flex mb-4" style={{maxwidth: '300px'}}>
                            <button class="btn btn-primary px-3 me-2" onClick={() => decreaseQuantity(item._id, item.quantity, item.productid.price)}>
                                <i class="fas fa-minus"></i>
                            </button>
        
                            <div class="form-outline">
                            <input id="form1" min="0" name="quantity" value={item.quantity} type="number" class="form-control"/>
                            <label class="form-label" for="form1">Quantity</label>
                            </div>
        
                            <button class="btn btn-primary px-3 ms-2" onClick={() => increaseQuantity(item._id, item.quantity, item.productid.price)}>
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        {/* <!-- Quantity --> */}
        
                        {/* <!-- Price --> */}
                        <p class="text-start text-md-center">
                            <strong>${item.totalPrice}</strong>
                        </p>
                        {/* <!-- Price --> */}
                        </div>
                        <hr class="my-4" />
                    </div>


                    ))}
                    
                </div>

                </div>
                <div class="card mb-4">
                    <div class="card-body">
                    <p><strong>Expected shipping delivery</strong></p>
                    <p class="mb-0">12.10.2020 - 14.10.2020</p>
                    </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                    <div class="card-body">
                    <p><strong>We accept</strong></p>
                    <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                    <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express" />
                    <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />
                    
                    </div>
                </div>
                </div>
                
                <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-header py-3">
                    <h5 class="mb-0">Summary</h5>
                    </div>
                    <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li
                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>${cartTotalPrice}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                        </li>
                        <li
                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                            <strong>Total amount</strong>
                            <strong>
                            <p class="mb-0">(including VAT)</p>
                            </strong>
                        </div>
                        <span><strong>${cartTotalPrice}</strong></span>
                        </li>
                    </ul>
        
                    <button type="button" class="btn btn-danger btn-lg btn-block">
                        <a href="/billing" class="text-light">Go to checkout</a>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>

        <Footer/>
    </div></>
  )
}

export default Cart;