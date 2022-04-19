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
  const userCtx = useContext(MyContext);
  // const [state, dispatch] = useReducer(reducer, value)
  console.log('state', userCtx.user);
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
      // base64 -> Reader 
      const form = new FormData();
      form.append();
      const response = await axios.post(`${BASE_URL}/api/auth/`, JSON.stringify(person),
        {
          headers: { 
            'Content-Type': 'application/json',
        },
        });

        // /user/get/1

      if (response.status === 200) {
        let user={
          username:response.data.user.username,
          token:response.data.token
        }
        console.log(user)
        userCtx.userDispatch({
          type:'ADDED_USER', 
          payload: {
            username: user.username,
            token: user.token,
          }
        })
        navigate('/user')
        // setUser({
        //   token:response.data.token,
        //   username:response.data.user.username,
        //   enterTime:response.data.expire_time
        // })
      }
      else {
        noCheckedPerson()
        setuserId(false)
      }
    }
    catch (err) {
      toast.error('Yuz ma`lumotlarini tanib bo`lmadi ')
    }
  }

  function noCheckedPerson() {
    toast.error('Yuz ma`lumotlarini tanib bo`lmadi ')
    navigate('/')
  }
  return (
    <div>
      {
        userid ? 
          <Camera handleSend={handleSubmit} webRef={webRef}/> : 
          <Login handleLogin={handleSend}/>
      }
      <ToastContainer />
    </div>
  );
}