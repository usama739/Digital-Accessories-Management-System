import { useNavigate } from 'react-router-dom';
import './Signup.css'
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import axios from 'axios';
import { message } from 'antd';


function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    const [formValues, setFormValues] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
      })
 
    const registerUser = async() => {

        const baseURL = 'http://localhost:3001';                /// server is listening on port 3001 ///
        try{
          const {name ,email, password, confirmPassword} = formValues

          if(password == confirmPassword){
            const response = await axios.post(`${baseURL}/signup`, {
                name: name,
                email: email,
                password: password,
              })
        

              // store the user in localStorage
              localStorage.removeItem('user');
              localStorage.setItem('user', response.data.userid)
              
              if (response.status === 201) {
                message.success('User Registered Successfuly');
                navigate('/');                              // redirects to main page, otherwise stay on same page
              }
            }

        }catch(err){
          message.error('Error Registering User');
          console.log(err)
        }
    
    };



  return (
    <><div>
    <Navbar/> 
    <section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>

                        {/* Email input  */}
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form3Example3">Your Name</label>
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                                placeholder="Enter Full Name" name='name'  value={formValues.name}
                                onChange={(e)=> setFormValues({
                                  ...formValues, [e.target.name] : e.target.value
                                })
                                }/>

                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form3Example3">Email address</label>
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                                placeholder="Enter a valid email address" name='email'  value={formValues.email}
                                onChange={(e)=> setFormValues({
                                  ...formValues, [e.target.name] : e.target.value
                                })
                                }/>

                        </div>

                        {/* Password input  */}
                        <div className="form-outline mb-3">
                            <label className="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                                placeholder="Enter password" name='password'   value={formValues.password}
                                onChange={(e)=> setFormValues({
                                  ...formValues, [e.target.name] : e.target.value
                                })
                                }/>

                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label" for="form3Example4">Confirm Password</label>
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                                placeholder="Enter password" name='confirmPassword'   value={formValues.confirmPassword}
                                onChange={(e)=> setFormValues({
                                ...formValues, [e.target.name] : e.target.value
                                })
                                }/>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            {/* Checkbox  */}
                            <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label className="form-check-label" for="form2Example3">
                                    Remember me
                                </label>
                            </div>
                            <a href="/login" className="text-body"><a href="/login"> Already have an account?</a></a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-primary btn-lg" onClick={registerUser}
                                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  
    </section>
    
    <Footer/>

    </div></>
  )
}

export default Signup