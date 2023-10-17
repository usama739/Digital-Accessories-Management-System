import React from 'react'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'

function Admin_Dashboard() {
  return (
    <div>
      <Navbar/>

      <div class="container-fluid pt-4 px-4" style={{marginTop: '100px'}}>
        <h1>Admin Dashboard</h1>
        <div class="row g-4">
            <div class="col-sm-12 col-xl-6">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Total Products</b></h5>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Products</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Airpods</td>
                                <td>100</td>
                                <td>78</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Apple Watch</td>
                                <td>50</td>
                                <td>36</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>44W Charger</td>
                                <td>150</td>
                                <td>101</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 col-xl-6">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Total Orders</b></h5>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Shahroz Maqsood</td>
                                <td>Wireless Keyboard,Mouse</td>
                                <td>$19</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Rabia </td>
                                <td>1000mAh Power bank</td>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Waleed Zafar</td>
                                <td>Iphone 14 pro max</td>
                                <td>$1799</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 col-xl-6">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Amounts Received</b></h5>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Arslan Munir</td>
                                <td>Vivo v21 Cover</td>
                                <td>$7</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Abdul Wahab</td>
                                <td>Airpods pro</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Wajeeha Adnan</td>
                                <td>Powerbank</td>
                                <td>$10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 col-xl-6">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Amount Pending</b></h5>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Shehreyar</td>
                                <td>Headphone</td>
                                <td>$17</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Usman </td>
                                <td>Samsung S10 5g</td>
                                <td>$1100</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Fawad Naqvi</td>
                                <td>Samsung S10 cover</td>
                                <td>$9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 col-xl-6">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Order Delivered</b></h5>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Arslan Munir</td>
                                <td>Vivo v21 Cover</td>
                                <td>$7</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Abdul Wahab</td>
                                <td>Airpods pro</td>
                                <td>$100</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Wajeeha Adnan</td>
                                <td>Powerbank</td>
                                <td>$10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12 col-xl-6">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Order Pending</b></h5>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Shehreyar</td>
                                <td>Headphone</td>
                                <td>$17</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Usman </td>
                                <td>Samsung S10 5g</td>
                                <td>$1100</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Fawad Naqvi</td>
                                <td>Samsung S10 cover</td>
                                <td>$9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-12">
                <div class="bg-light rounded h-100 p-4">
                    <h5 class="mb-4"><b>Overseas Orders</b></h5>
                    <div class="table-responsive">
                        <table class="table table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">ZIP</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>John</td>
                                    <td>Airpods pro</td>
                                    <td>jhon@email.com</td>
                                    <td>USA</td>
                                    <td>123</td>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mark</td>
                                    <td>Apple Watch</td>
                                    <td>mark@email.com</td>
                                    <td>UK</td>
                                    <td>456</td>
                                    <td>$300</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jacob</td>
                                    <td>Samsung S23 Ultra</td>
                                    <td>jacob@email.com</td>
                                    <td>AU</td>
                                    <td>789</td>
                                    <td>$2500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
            {/* <!-- Table End --> */}

      <Footer/>
    </div>
  )
}

export default Admin_Dashboard