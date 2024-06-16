import React from 'react'
import './About.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import backgroundImage from '../src/images/bg.PNG';

function About() {
  return (
    <div>
        <Navbar/>

        <div style={{ position: 'relative'}}>            {/* main div for image and all content on image, including foooter as well */}
          <img src={backgroundImage} alt="MyMovie" className='mainimg'/>
        
        <div style={{ height: '350px', width: '100%' , marginTop: '100px', paddingTop: '90px', color: 'white', fontStyle: 'italic'}}>
            <h1 className="display-4" style={{ marginLeft: '600px' }}>Our Place</h1>
            <blockquote className="lead text-center" style={{ marginLeft: '100px', marginRight: '100px' }}>
                Discover the ultimate hub for managing your digital accessories effortlessly. Streamline, organize, and optimize your tech collection with our comprehensive platform. Experience convenience like never before and stay on top of the latest trends in digital accessories management.
            </blockquote>
            <hr />
            <h1 className="display-4" style={{ marginLeft: '620px' }}>History</h1>
            <p className="lead text-center" style={{ marginLeft: '100px', marginRight: '100px' }}>
                In the digital age, managing our accessories is crucial. Our platform redefines how you organize, optimize, and integrate your tech arsenal. Embrace the revolution and unlock the full potential of your digital world. Seamlessly manage your digital accessories and experience the convenience and joy of a streamlined digital lifestyle.
            </p>
        </div>
        <div style={{height: '200px'}}></div>

        <Footer/>
      </div>

    </div>
  )
}

export default About