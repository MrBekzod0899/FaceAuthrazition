import React, {useContext,useReducer, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Camera from "./Camera";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from "./reducer";
import { MyContext } from ".";
import Login from "./components/Login/Login";

export default function App() {
  let navigate = useNavigate()
  const webRef = useRef()
  const [username,setUsername]=useState()
  const [user,setUser]=useState({username:'',token:'',enterTime:''})
  const value = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, value)
  console.log(state)
  const [userid, setuserId] = useState(false)
  let BASE_URL = 'http://43d2-195-158-2-216.ngrok.io'

  const handleSend = async () => {
    let person={
      username:document.getElementById('username').value
    }
    try {
      const response = await axios.post(`${BASE_URL}/api/login/`, JSON.stringify(person),
        {
          headers: { 'Content-Type': 'application/json' },
        });
      setUsername(response.data.username)
      if (response.status === 200) {
        toast.success('your login is successfully!!! Please look at the camera')
        setuserId(true)
      }
      else {
        noCheckedPerson()
        setuserId(false)
      }
    }
    catch (err) {
      console.log(err)
    }
  };

  const handleSubmit=async()=>{
    let imgUrl = webRef.current.getScreenshot()
    let person={
      username:username,
      photo_last:imgUrl
    }
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/`, JSON.stringify(person),
        {
          headers: { 'Content-Type': 'application/json' },
        });
      if (response.status === 200) {
        checkedPerson()
        setUser({
          token:response.data.token,
          username:response.data.user.username,
          enterTime:response.data.expire_time
        })
      await dispatch({type:'ADDED_USER',payload:{token:response.data.token,username:response.data.user.username}})
      }
      else {
        noCheckedPerson()
        setuserId(false)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  const checkedPerson = () => {
    navigate('/user')
  }

  function noCheckedPerson() {
    navigate('/')
    toast.error('Yuz ma`lumotlarini tanib bo`lmadi ')
  }
  return (
    <div>
      {
        userid ? <Camera handleSend={handleSubmit} webRef={webRef}/> : <Login handleLogin={handleSend} />
      }
      <ToastContainer />
    </div>
  );
}