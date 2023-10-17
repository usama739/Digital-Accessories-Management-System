import React from 'react'
import './Main.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import mob4 from './images/mob4.jpg'
import { TypeAnimation } from 'react-type-animation';

function Products() {
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
          <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x4</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                class="card-img-top" alt="Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1099</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x2</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                class="card-img-top" alt="Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1199</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Envy</h5>
                  <h5 class="text-dark mb-0">$1099</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x3</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                class="card-img-top" alt="Gaming Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1399</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">Toshiba B77</h5>
                  <h5 class="text-dark mb-0">$1299</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* ========================================================================================================= */}


    <section style={{backgroundColor: '#eee'}}>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x4</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                class="card-img-top" alt="Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1099</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x2</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                class="card-img-top" alt="Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1199</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Envy</h5>
                  <h5 class="text-dark mb-0">$1099</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x3</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                class="card-img-top" alt="Gaming Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1399</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">Toshiba B77</h5>
                  <h5 class="text-dark mb-0">$1299</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    
    <section style={{backgroundColor: '#eee'}}>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x4</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                class="card-img-top" alt="Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1099</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Notebook</h5>
                  <h5 class="text-dark mb-0">$999</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x2</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                class="card-img-top" alt="Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1199</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">HP Envy</h5>
                  <h5 class="text-dark mb-0">$1099</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div class="card">
              <div class="d-flex justify-content-between p-3">
                <p class="lead mb-0">Today's Combo Offer</p>
                <div
                  class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{width: '35px', height: '35px'}}>
                  <p class="text-white mb-0 small">x3</p>
                </div>
              </div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                class="card-img-top" alt="Gaming Laptop" />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                  <p class="small text-danger"><s>$1399</s></p>
                </div>
    
                <div class="d-flex justify-content-between mb-3">
                  <h5 class="mb-0">Toshiba B77</h5>
                  <h5 class="text-dark mb-0">$1299</h5>
                </div>
    
                <div class="d-flex justify-content-between mb-2">
                  <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
                  <div class="ms-auto text-warning">
                    <i class="fa fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        <Footer/>
    </div>
  )
}

export default Products