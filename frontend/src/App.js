import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Billing from './Billing'
import Cart from './Cart'
import Main from './Main'
import Products from './Products'
import Support from './Suppport'
import Admin_Dashboard from './Admin_Dashboard';
import Tracking from './Tracking';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/billing" element={<Billing />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/tracking" element={<Tracking />} />
          <Route exact path="/support" element={<Support />} />
        </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
