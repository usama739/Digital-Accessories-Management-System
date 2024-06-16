import React, {useEffect, useState} from 'react'
import './Main.css'
import { TypeAnimation } from 'react-type-animation';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import axios from 'axios';
import mob3 from './images/mob3.jpg'
import { message } from 'antd';
function Main() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the server
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3001/products/getproducts');
            console.log(response.data.products);
            setProducts(response.data.products);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);


    // Add product to the cart of active user
    const addToCart = async (productId, price) => {
        const userId = localStorage.getItem('user');            // currently active user
        try {
            await axios.post('http://localhost:3001/add-to-cart', {userId, productId, price });
            console.log('Product added to cart');
            message.success('Order Placed Successfuly');
        } catch (error) {
            console.error('Error adding product to cart:', error);
            message.error('Error Placing Order');
        }
    };


  return (
    <div>
        <Navbar/>
        
        <div style={{ position: 'relative'}}>            {/* main div for image and all content on image */}
            <img src={mob3} alt='mypic' className='mainImg'/>
            <TypeAnimation 
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Explore Our Collection of Cutting-Edge Tech Products',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Discover Tech Solutions Tailored for You',
                    1000,
                    'Unleash the Power of Innovation with Our Products',
                    1000,
                    'Quality Products to Simplify Your Digital Lifestyle',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{
                    position: 'absolute',
                    top: '40%', // Adjust this value to position the text vertically
                    left: '50%', // Center text horizontally
                    transform: 'translate(-50%, -50%)', // Center text horizontally and vertically
                    fontSize: '3em',
                    fontStyle: 'italic',
                    display: 'inline-block',
                    color: '#fff', // Text color
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a text shadow for visibility
                    textAlign: 'center' // Center-align the text
                }}
                repeat={Infinity}
            />
        </div>



        
        <div className="content" style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
    <div className="row">
        {products.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
                <div className="card" style={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
                    <img className="card-img-top" src={`data:image/jpeg;base64,${product.image.toString('base64')}`} alt="Card image cap" style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text" style={{ maxHeight: '100px', overflow: 'hidden',color:'gray' }}>{product.description}</p>
                        <br></br>
                        <br></br>
                        <button style={{ position: 'absolute', bottom: 5, left: 5}} className="btn btn-primary" onClick={() => addToCart(product._id, product.price)}>Add to Cart</button>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'rgba(255, 255, 255, 0.8)', padding: '5px 10px', borderRadius: '0 0 5px 0' }}>
                        ${product.price}
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

        <Footer/>
    </div>
  )
}

export default Main