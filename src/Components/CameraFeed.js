import { useEffect, useRef } from "react";
import useTakePicture from "../hooks/useTakePicture";

function CameraFeed({ setFlash }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const { takePicture } = useTakePicture(videoRef, canvasRef, setFlash);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted className="video"></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <button
        className="take-picture"
        title="Click to take a picture!"
        onClick={takePicture}
      >
        Take a Picture 📸
      </button>
    </div>
  );
}

export default CameraFeed;
