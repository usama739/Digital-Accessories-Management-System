import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Admin_Dashboard() {
    const [balanceSheet, setBalanceSheet] = useState(null);

    useEffect(() => {
      const fetchBalanceSheet = async () => {
        try {
          const response = await axios.get('http://localhost:4000/products/balance-sheet');
          setBalanceSheet(response.data.balanceSheet);
        } catch (error) {
          console.error('Error fetching balance sheet:', error);
        }
      };
  
      fetchBalanceSheet();
    }, []);


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      



  return (
    <div>

      <div class="container-fluid pt-4 px-4" style={{marginTop: '100px'}}>
        <h2>Admin Dashboard</h2>
        <div class="row g-4">
            <div className="col-sm-12 col-xl-6">
                <div className="bg-light rounded h-100 p-4">
                <h5 className="mb-4"><b>Balance Sheet</b></h5>
                {balanceSheet && (
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Metric</th>
                        <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(balanceSheet).map(([metric, value]) => (
                        <tr key={metric}>
                            <td>{capitalizeFirstLetter(metric.replace(/([a-z])([A-Z])/g, '$1 $2'))}</td>
                            <td>{value}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                )}
                </div>
            </div>

            {/* <div class="col-sm-12 col-xl-6">
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
            </div> */}


           {/* <div class="col-sm-12 col-xl-6">
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
            </div> */}


        </div>
      </div>
            {/* <!-- Table End --> */}

    </div>
  )
}

export default Admin_Dashboard