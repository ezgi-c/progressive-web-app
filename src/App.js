import "./styles.css";
import { useEffect, useState, useRef } from "react";
import CameraFeed from "./Components/CameraFeed";
import useTakePicture from "./hooks/useTakePicture";

function App() {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [takePicture, flash] = useTakePicture(videoRef, canvasRef);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className={`App ${flash ? "flash" : ""}`}>
        <header className="header">
          <h1 className="h1">Take a Picture</h1>
        </header>
        <div className="video-container">
          <CameraFeed
            stream={stream}
            videoRef={videoRef}
            canvasRef={canvasRef}
          />
          <button
            className="take-picture"
            title="Click to take a picture!"
            onClick={takePicture}
          >
            Take a Picture 📸
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
