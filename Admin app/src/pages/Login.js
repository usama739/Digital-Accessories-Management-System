/* eslint-disable */

import React from 'react'
import Custominput from '../components/Custominput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='py-5' style={{background:"#ffd333",minHeight:"100vh"  }}>
      <div className='my-5 w-25 py-5 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Sign In</h3>
        <p className='text-center'>Login to your account to continue</p>
      <form action=''>
      <Custominput type='text' label='Email Address' id='email'/>
      <Custominput type='password' label='Password' id='pass'/>
      <div className='mb-3 text-end'>
      <Link to='/forgot-password'>forgot password</Link>
      </div>
      <Link to='/admin' className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
       style={{'background':'#ffd333'}} type='Submit' >
        Login
      </Link>
      </form>
      </div>
      
    </div>
  )
}
/* eslint-enable */
export default Login
