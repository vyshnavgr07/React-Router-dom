import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type='text'  placeholder='Username'/> <br />
        <input type='text' placeholder='Password' /> <br />
        <input type='text'placeholder='Reenter Your password' /> <br/>
        <Link to="/home"> <button>Login</button></Link>
       
    </div>
  )
}

export default Login