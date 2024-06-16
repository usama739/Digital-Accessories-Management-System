/* eslint-disable */

import React from 'react'
import Custominput from '../components/Custominput'

const Forgot = () => {
  return (
    <div className='py-5' style={{background:"#ffd333",minHeight:"100vh"  }}>
      <div className='my-5 w-25 py-5 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Please enter your registered email</p>
      <form action=''>
      <Custominput type='text' label='Email Address' id='email'/>
      <button className='border-0 px-3 py-2 text-white fw-bold w-100'
       style={{'background':'#ffd333'}} type='Submit' >
        Email Address
      </button>
      </form>
      </div>
      
    </div>
  )
}
/* eslint-enable */
export default Forgot
