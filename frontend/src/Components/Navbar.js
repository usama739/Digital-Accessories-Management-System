import './Navbar.css'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
    const [sidebarWidth, setSidebarWidth] = useState('0');
    const [mainMarginLeft, setMainMarginLeft] = useState('0');

    // Function to open the sidebar
    const openNav = () => {
    setSidebarWidth('250px');
    setMainMarginLeft('250px');
    };

    // Function to close the sidebar
    const closeNav = () => {
    setSidebarWidth('0');
    setMainMarginLeft('0');
    };

  return (
    <div>
        <nav className='flex'>
            <div className='containerleft'>
                
                <div id="mySidebar" className='sidebar' style={{ width: sidebarWidth }}>
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                    <a href="/about">About</a>
                    <a href="/billing">Billing</a>
                    <a href="/tracking">Tracking</a>
                    <a href="/cart">Cart</a>
                    <a href="/signup">Sign Up</a>
                </div>

                <div id="main" style={{ marginLeft: mainMarginLeft }}>
                    <button className="openbtn" onClick={openNav}>☰</button>
                </div>

                <a className="ProjectHeading" href="main.html">DIGITAL <span><b>Acessories Management</b></span> </a>
                
            </div>
            
            <div className='contianerRight'>    
                <ul className='navbarList'>
                    <li><a href='/products'>Products</a></li>   
                    <li><a href='/support'>Support</a></li>   
                    <li><a href='/login'>Login</a></li>  
                </ul> 
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar