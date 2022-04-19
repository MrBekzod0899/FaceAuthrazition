import React from "react";
import Webcam from "react-webcam";
export default function Camera({ handleSend, webRef }) {
  return (
    <div className="container-fluid app">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="main card"> 
            <div className="camera">
              <Webcam
                mirrored={true}
                ref={webRef}
                screenshotFormat="image/jpg"
                id="webcam"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
      </div>
      </div>
    </div>
  );
}
