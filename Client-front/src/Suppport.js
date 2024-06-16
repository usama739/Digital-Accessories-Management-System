import React from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'

function Suppport() {
  return (
    <div>
        <Navbar/>

        <div class="container" style={{marginTop: '130px'}}>
            <div class="row">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header bg-primary text-white"><i class="fa fa-envelope"></i> Contact us.
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea class="form-control" id="message" rows="6" required></textarea>
                                </div>
                                <br/>
                                <div class="mx-auto">
                                <button type="submit" class="btn btn-primary text-right">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="card bg-light mb-3">
                        <div class="card-header bg-success text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                        <div class="card-body">
                            <p>47/3 A Zone Labor Colony</p>
                            <p>Lahore</p>
                            <p>Pakistan</p>
                            <p>Email : admin@shahroz.com</p>
                            <p>Tel. +923084952456</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Suppport