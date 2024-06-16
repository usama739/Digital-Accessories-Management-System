
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import AddCategory from './pages/AddCategory';
import CategoryList from './pages/CategoryList';
import Contact from './pages/Contact';
import Customers from './pages/Customers';
import PlacedOrdersTable from './pages/Orders';
/* eslint-disable */
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin' element={<MainLayout/>} >
          <Route index element={<Dashboard/>}/>
          <Route path='/admin/add-product' element={<AddProduct/>}/>
          <Route path='/admin/product-list' element={<ProductList/>}/>
          <Route path='/admin/category' element={<AddCategory/>}/>
          <Route path='/admin/category-list' element={<CategoryList/>}/>
          <Route path='/admin/contact' element={<Contact/>}/>
          <Route path='/admin/customers' element={<Customers/>}/>
          <Route path='/admin/orders' element={<PlacedOrdersTable/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
/* eslint-enable */
export default App;
