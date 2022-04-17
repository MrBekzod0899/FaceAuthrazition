import React from "react";
import Webcam from "react-webcam";
export default function Camera({handleSend,webRef}) {
  return (
    <>
      <div className="main card bg-secondary">
        <div className="camera">
          <Webcam
            mirrored={true}
            ref={webRef}
            screenshotFormat="image/jpg"
            id="webcam"
          />
        </div>
        <input
          className="form-control  mt-2"
          name="username"
          id="username"
          placeholder="enter your ID"
        />
        <button
          type="button"
          className="btn btn-primary mt-2"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </>
  );
}
