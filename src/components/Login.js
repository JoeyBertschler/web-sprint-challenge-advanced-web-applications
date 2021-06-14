import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const {push} = useHistory()
  let token = localStorage.getItem('token')


  const [credentials, setCredentials] = useState({
    username: '', //lambda
    password: ''  //school
  })

  const [error, setError] = useState({
    //replace with error state
    error: 'Error. Username and/or PW wrong. Likely 401 or 403.'
  })

  useEffect( ()=>{
    //might add more stuff later
  })

  const handleChange = (e)=>{
    setCredentials( {
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(e)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then( (res)=>{
        console.log('Axios handleSubmit res: ', res)
        localStorage.setItem('token', res.data.payload)
        console.log('Payload: ', res.data.payload)
        push('/bubbles')
      })
      .catch( (err)=>{
        console.log('Error: ', err)
      })
}

  return (
    <> {/* JSX expressions must have one parent element. */}
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <div data-testid="loginForm" className="login-form">
            {/* <div data-testid="errorMessage" className="error">{error}</div> */}
          <h2>Build login form here</h2>
    
          <form onSubmit={handleSubmit}>
            <input type='text' name='username' value={credentials.username}
                  onChange={handleChange} placeholder="Username: "
                  data-testid='username'
            />
            <br/>
            <input type='password' name='password' value={credentials.password}
                  onChange={handleChange} placeholder='Password: '
                  data-testid='password'
            />
            <br/>
            <button>Login</button>
          </form>

        </div>
         <p data-testid="errorMessage" className="error">{error.error}</p>
      </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to lambda / school, save that token to localStorage.