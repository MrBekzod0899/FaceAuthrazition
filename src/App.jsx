import React, {useContext, useReducer, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import Camera from "./Camera";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from "./reducer";
import { MyContext } from ".";

export default function App() {
  const value = useContext(MyContext);

  const [state, dispatch] = useReducer(reducer,value)
  console.log(state)
  const [login, setLogin] =useState(false);
  console.log(login)
  let navigate=useNavigate()
  const webRef = useRef()

const handleSend = async() => {
  let imgUrl = webRef.current.getScreenshot()
 
  const user = {
    username: document.getElementById('username').value,
    photo_last: imgUrl
  }

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };
  const BASE_URL = 'https://19dd-94-158-59-112.ngrok.io'
  await fetch(`${BASE_URL}/api/auth/`, requestOptions)
    .then((data) => {
        if(data.status===200){
          let user={
            token:'', 
            username:'asd'
          }
          console.log(user)
          setLogin(true)
          dispatch({type:'ADDED_USER',payload:user})
          checkedPerson()
        }
        else{
          setLogin(false)
          noCheckedPerson()
        }
    })
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
             <Camera handleSend={handleSend} webRef={webRef}/>
             <ToastContainer/>
        </div>  
    </div> 
</div>
);
}