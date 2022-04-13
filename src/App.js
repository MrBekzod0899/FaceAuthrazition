import React,{useRef} from "react";
import Webcam from "react-webcam";

export default function App() {
    const webRef=useRef()
   
   
  const handleSend = () => {
    let imgUrl=webRef.current.getScreenshot()
     console.log(document.forms.formData.img)
     console.log(document.forms.formData.username)
     fetch('http://6318-94-158-59-112.ngrok.io/api/auth/',{
      method:'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body:{
         username: document.forms.formData.username,
         img:document.forms.formData.img
      }
  })
  };

  
  return (
    <div className="App">
      <div className="main">
            {/* <Webcam ref={webRef} width={500} height={400} id='webcam'/>   */}
            <form action="http://6318-94-158-59-112.ngrok.io/api/auth/" encType='multipart/form-data'  method="post" name="formData">
                <input name="username" placeholder="enter your ID"/>
                <input type='file'  name="img"  />
                <button type="submit" onClick={handleSend}>Send</button>
            </form>
      </div>
    </div>
  );
}
