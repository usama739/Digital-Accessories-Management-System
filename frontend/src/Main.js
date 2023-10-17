import React from 'react'
import './Main.css'
import { TypeAnimation } from 'react-type-animation';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic10 from './images/pic10.PNG';
import pic11 from './images/pic11.JPG';
import pic12 from './images/pic12.JPG';
import mob3 from './images/mob3.jpg'

function Main() {
  return (
    <div>
        <Navbar/>
        
        <div style={{ position: 'relative'}}>            {/* main div for image and all content on image */}
            <img src={mob3} alt='mypic' className='mainImg'/>
            <TypeAnimation 
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Explore Our Collection of Cutting-Edge Tech Products',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Discover Tech Solutions Tailored for You',
                    1000,
                    'Unleash the Power of Innovation with Our Products',
                    1000,
                    'Quality Products to Simplify Your Digital Lifestyle',
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

        <div className="content">
        <div className="card-deck bg-light">
            <div className="card"style={{marginTop: '20px', marginRight: '20px', width: '450px'}}>
                <img className="card-img-top" src={pic1} alt="Card image cap" style={{height: '300px'}}/>
                <div className="card-body">
                <h5 className="card-title">Airpods Pro</h5>
                <p className="card-text">Wireless earbuds with noise cancellation, perfect for immersive audio.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card" style={{marginTop: '20px', marginRight: '20px'}}>
                <img className="card-img-top" src={pic2} alt="Card image cap" style={{height: '300px'}} />
                <div className="card-body">
                <h5 className="card-title">Apple Watch series 8</h5>
                <p className="card-text">Next-generation smartwatch with advanced features for a connected lifestyle.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card" style={{marginTop: '20px', marginRight: '20px'}}>
                <img className="card-img-top" src={pic3} alt="Card image cap" style={{height: '300px'}} />
                <div className="card-body">
                <h5 className="card-title">Samsung S23 Ultra</h5>
                <p className="card-text">Cutting-edge smartphone with powerful performance and stunning display quality!.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>


        <div className="card-deck bg-light">
            <div className="card"style={{marginTop: '20px', marginRight: '20px'}}>
                <img className="card-img-top" src={pic10} alt="Card image cap" style={{height: '300px'}}/>
                <div className="card-body">
                <h5 className="card-title">Google Pixel 6 pro</h5>
                <p className="card-text">Highly advanced smartphone with exceptional camera capabilities and seamless performance.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card" style={{marginTop: '20px', marginRight: '20px'}}>
                <img className="card-img-top" src={pic11} alt="Card image cap" style={{height: '300px'}} />
                <div className="card-body">
                <h5 className="card-title">Basues 44w Charger</h5>
                <p className="card-text">Next-generation basuescharger with advanced features for a connected lifestyle.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card" style={{marginTop: '20px', marginRight: '20px', width: '60%'}}>
                <img className="card-img-top" src={pic12} alt="Card image cap" style={{height: '300px'}} />
                <div className="card-body">
                <h5 className="card-title">Airpods pro max</h5>
                <p className="card-text">Cutting-edge smartphone with powerful performance and stunning display quality!.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>

        <Footer/>
    </div>
  )
}

export default Main