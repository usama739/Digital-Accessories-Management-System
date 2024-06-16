import React, {useState, useEffect}  from 'react'
import axios from 'axios';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function Billing() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
        const userId = localStorage.getItem('user');
        try {
            const response = await axios.get(`http://localhost:3001/get-cart?userId=${userId}`);
            setCartItems(response.data.cartItems);
            console.log(response.data.cartItems);

        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    // Call the fetchCart function within the useEffect
    fetchCart();
}, []);




  return (
    <><div>
        <Navbar />
 
        <div class="card" style={{marginTop: '100px'}}>
        <div class="card-body">
          <div class="container mb-5 mt-3">
            <div class="row d-flex align-items-baseline">
              <div class="col-xl-9">
                <p style={{ color: '#7e8d9f', fontSize: '20px' }}>Invoice: <strong>ID: #123-123</strong></p>
              </div>
              <div class="col-xl-3 float-end">
                <a class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
                    class="fas fa-print text-primary"></i> Print</a>
                <a class="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
                    class="far fa-file-pdf text-danger"></i> Export</a>
              </div>
              <hr />
            </div>
      
            <div class="container">
              
              <div class="row">
                <div class="col-xl-8">
                  <ul class="list-unstyled">
                    <li class="text-muted">To: <span style={{color:'#5d9fc5'}}>Shahroz Maqsood</span></li>
                    <li class="text-muted">Dhanola, Faislabad</li>
                    <li class="text-muted">Punjab, Pakistan</li>
                    <li class="text-muted"><i class="fas fa-phone"></i> 123-456-789</li>
                  </ul>
                </div>
                <div class="col-xl-4">
                  <p class="text-muted">Invoice</p>
                  <ul class="list-unstyled">
                    <li class="text-muted"><i class="fas fa-circle" style={{color:'#84B0CA'}}></i> <span
                        class="fw-bold">ID:</span>#123-456</li>
                    <li class="text-muted"><i class="fas fa-circle" style={{color:'#84B0CA'}}></i> <span
                        class="fw-bold">Creation Date: </span>Jun 23,2021</li>
                    <li class="text-muted"><i class="fas fa-circle" style={{color:'#84B0CA'}}></i> <span
                        class="me-1 fw-bold">Status:</span><span class="badge bg-warning text-black fw-bold">
                        Unpaid</span></li>
                  </ul>
                </div>
              </div>
      

              <div class="row my-2 mx-1 justify-content-center">
                <table class="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th style={{backgroundColor:'#84B0CA'}} scope="col">#</th>
                      <th style={{backgroundColor:'#84B0CA'}} scope="col">Description</th>
                      <th style={{backgroundColor:'#84B0CA'}} scope="col">Qty</th>
                      <th style={{backgroundColor:'#84B0CA'}} scope="col">Unit Price</th>
                      <th style={{backgroundColor:'#84B0CA'}} scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={item._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.productName}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price}</td>
                      <td>${item.totalPrice}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>


              <div class="row">
                <div class="col-xl-8">
                  <p class="ms-3">Add additional notes and payment information</p>
                </div>
                <div class="col-xl-3">
                  <ul class="list-unstyled">
                    <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>
                      ${cartItems.reduce((total, item) => total + item.totalPrice, 0)}
                    </li>
                    <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%)</span>
                      ${(cartItems.reduce((total, item) => total + item.totalPrice, 0) * 0.15).toFixed(2)}
                    </li>
                  </ul>
                  <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                      style={{fontsize: '25px'}}>
                           ${(
                              cartItems.reduce((total, item) => total + item.totalPrice, 0) +
                              cartItems.reduce((total, item) => total + item.totalPrice, 0) * 0.15
                            ).toFixed(2)
                          }
                        </span></p>
                </div>
              </div>


              <hr />
              <div class="row">
                <div class="col-xl-10">
                  <p>Thank you for your purchase</p>
                </div>
                <div class="col-xl-2">
                  <button type="button" class="btn btn-primary text-capitalize"
                    style={{backgroundcolor:'#60bdf3'}}>Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <Footer />

    </div></>
  )
}

export default Billing