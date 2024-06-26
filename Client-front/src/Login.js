import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import './Signup.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import axios from 'axios';
import { message } from 'antd';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const [formValues, setFormValues] = useState({
    email:"",
    password:"",
  })
 
  const LoginUser = async () => {

    const baseURL = 'http://localhost:3001';                /// server is listening on port 3001 ///
    try{
      const {email, password} = formValues
      const response = await axios.post(`${baseURL}/login`, {
        email: email,
        password: password
      })

      // store the user in localStorage
      console.log(response.data)
      localStorage.removeItem('user');
      localStorage.setItem('user', response.data.userid)
      if (response.status === 200) {
        message.success('Login Successfuly')
        navigate('/');                              // redirects to main page, otherwise stay on same page
      }
    }catch(err){
      console.log(err)
      message.error('Invalid Credentials');

    }

  };



  return (
    <><div>
    <Navbar/> 

    <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image"/>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
               

                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">Email address</label>
                  <input type="email" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Enter a valid email address" name='email'  value={formValues.email}
                    onChange={(e)=> setFormValues({
                      ...formValues, [e.target.name] : e.target.value
                    })
                    }/>
                  
                </div>
      
                {/* <!-- Passsword input --> */}
                <div class="form-outline mb-3">
                  <label class="form-label" for="form3Example4">Password</label>
                  <input type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" name='password'   value={formValues.password}
                    onChange={(e)=> setFormValues({
                      ...formValues, [e.target.name] : e.target.value
                    })
                    }/>
                  
                </div>
      
                <div class="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="btn btn-danger  btn-lg" onClick={LoginUser}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                      class="link-danger">Register</a></p>
                </div>
      
              </form>
            </div>
          </div>
        </div>

      </section>

    <Footer/>

    </div></>
  )
}

export default Login