import React, {useRef, useState} from "react";
import Webcam from "react-webcam";
import User from "./User";

export default function App() {
  const [login, setLogin] = useState(false);
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
  const BASE_URL = 'http://19dd-94-158-59-112.ngrok.io'
  await fetch(`${BASE_URL}/api/auth/`, requestOptions)
    .then((data) => {
        console.log(data)
    })
};


return (
<div className="container-fluid app">
      <div className="row ">
        <div className="col-lg-6 col-xl-6 col-md-6">
          <div className="main card bg-secondary">
            <div className="camera">
              <Webcam mirrored={true} ref={webRef} width={400} height={400} screenshotFormat="image/jpg" id='webcam' />
            </div>
            <input className="form-control  mt-2" name="username" id="username" placeholder="enter your ID" />
            <button type="button" className="btn btn-primary mt-2" onClick={handleSend}>Send</button>
          </div>
        </div>  
    </div> 

</div>
);
}