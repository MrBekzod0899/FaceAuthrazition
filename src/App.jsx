import React, {useContext, useReducer, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Camera from "./Camera";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from "./reducer";
import { MyContext } from ".";

export default function App() {
  const value = useContext(MyContext);

  const [state, dispatch] = useReducer(reducer,value)
  const [userid,setuserId]=useState(false)
  const [login, setLogin] =useState(false);

  let navigate=useNavigate()
  const webRef = useRef()

const handleSend = async() => {
  // let imgUrl = webRef.current.getScreenshot()
 
  const user = {
    username: document.getElementById('username').value,
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  };
  const BASE_URL = 'http://57db-94-158-59-112.ngrok.io'
  try{
    const response=await axios.post(`${BASE_URL}/api/login/`, JSON.stringify(user),
    {
      headers:{'Content-Type':'application/json'},
    });
    console.log(JSON.stringify(response))
    console.log(JSON.stringify(response.data))
    console.log(response.status)
    if(response.status===200){
      toast.success('your login is successfully!!! Please look at the camera')
      setuserId(true)
    }
    else{
      noCheckedPerson()
      setuserId(false)
    }
  }
  catch(err){
    console.log(err)
  }
};



const  checkedPerson=()=>{
    navigate('/user')
}

function noCheckedPerson(){
  navigate('/')
  toast.error('Yuz ma`lumotlarini tanib bo`lmadi ')
}
return (
<div className="container-fluid app">
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-sm-12">
             <Camera handleSend={handleSend} webRef={webRef} isUserId={userid}/>
             <ToastContainer/>
        </div>  
    </div> 
</div>
);
}