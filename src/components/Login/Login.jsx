import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Login({handleLogin}) {
  return (
   <div className='login'>
    <div className='container'>
      <form className="form-1">
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="username" name="username" id="username" required />
        <span>Forgot Password</span>
        <button type='button' onClick={handleLogin}>Login</button>
        <p><Link to='/register'>Any have account or Sign Up?</Link></p>
      </form>
    </div>
  </div> 
  )
}
