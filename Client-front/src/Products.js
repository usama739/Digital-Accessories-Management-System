import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Main.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import mob4 from './images/mob4.jpg'
import { TypeAnimation } from 'react-type-animation';

function Products() {
  const [items, setPrioritizedItems] = useState([]);

  useEffect(() => {
    const fetchPrioritizedItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/prioritized-items');
        setPrioritizedItems(response.data.prioritizedItems);
        console.log(response.data.prioritizedItems)
      } catch (error) {
        console.error('Error fetching prioritized items:', error);
      }
    };

    fetchPrioritizedItems();
  }, []);


  return (
    <div>
        <Navbar/>

        <div style={{ position: 'relative'}}>            {/* main div for image and all content on image */}
          <img src={mob4} alt='mypic' className='mainImg'/>

          <TypeAnimation 
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Shop the Trendiest Products Right Now',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Check Out the Most Popular Items',
                    1000,
                    'Best Selling Products',
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
        
    <section style={{backgroundColor: '#eee'}}>
      <div class="container py-5">
        <div class="row">

          {items.map((item) => (
            <div key={item._id} class="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <div class="card">
                <div class="d-flex justify-content-between p-3">
                  <p class="lead mb-0">Today's Combo Offer</p>
                  <div
                    class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{width: '35px', height: '35px'}}>
                    <p class="text-white mb-0 small">x{item.quantity}</p>
                  </div>
                </div>
                <img class="card-img-top" src={`data:image/jpeg;base64,${item.image.toString('base64')}`}
                   style={{ height: '200px', objectFit: 'cover' }} alt={item.productName} />
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">{item.category}</a></p>
                  </div>
      
                  <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0">{item.productName}</h5>
                    <h5 class="text-dark mb-0">${item.price}</h5>
                  </div>
      
                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">Available: {item.stock}</p>
                    <div class="ms-auto text-warning">

                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`fa fa-star${index < 5 ? ' checked' : ''}`}
                        ></i>
                      ))}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
    </section>


    <Footer/>
    </div>
  )
}

export default Products