import axios from 'axios';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
export default function Login({handleLogin, }) {

  const imgRef = useRef();
  const onSubmit = (e) => {
    const form = new FormData();
    console.log(imgRef.current);
    const base64 = 'img';
    e.preventDefault();
    imgRef.current = base64;
    form.append('image', imgRef.current)
    handleLogin();

  }
  return (
   <div className='login'>
    <div className='container'>
      <form className="form-1" onSubmit={onSubmit} encType='multipart/form-data'>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input type="username" name="username" id="username" required />
        <span>Forgot Password</span>
        <input type="file" name='img' ref={imgRef}/>
        <button type='submit'>Login</button>
        <p><Link to='/register'>Any have account or Sign Up?</Link></p>
      </form>
    </div>
  </div> 
  )
}
