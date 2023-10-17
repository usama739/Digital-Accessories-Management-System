import React from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function Billing() {
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Airpods Pro</td>
                      <td>4</td>
                      <td>$200</td>
                      <td>$800</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Iphone 14 pro Ultra Privacy Protector</td>
                      <td>1</td>
                      <td>$10</td>
                      <td>$10</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Apple watch series 6</td>
                      <td>1</td>
                      <td>$300</td>
                      <td>$300</td>
                    </tr>
                  </tbody>
      
                </table>
              </div>
              <div class="row">
                <div class="col-xl-8">
                  <p class="ms-3">Add additional notes and payment information</p>
      
                </div>
                <div class="col-xl-3">
                  <ul class="list-unstyled">
                    <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>$1110</li>
                    <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%)</span>$111</li>
                  </ul>
                  <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                      style={{fontsize: '25px'}}>$1221</span></p>
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