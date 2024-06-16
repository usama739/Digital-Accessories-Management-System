/* eslint-disable */
import React from 'react'
import Custominput from '../components/Custominput'

const Resetpassword = () => {
  return (
    <div className='py-5' style={{background:"#ffd333",minHeight:"100vh"  }}>
      <div className='my-5 w-25 py-5 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Reset Passcode</h3>
        <p className='text-center'>Please enter your new password</p>
      <form action=''>
      <Custominput type='password' label='New Password' id='new-pass'/>
      <Custominput type='password' label='Confirm Password' id='confirm-pass'/>
      <button className='border-0 px-3 py-2 text-white fw-bold w-100'
       style={{'background':'#ffd333'}} type='Submit' >
        Reset Passcode 
      </button>
      </form>
      </div>
      
    </div>
  )
}
/* eslint-enable */
export default Resetpassword
