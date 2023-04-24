import { useEffect, useRef } from "react";

function CameraFeed({ setFlash }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setFlash(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted className="video"></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
}

export default CameraFeed;
