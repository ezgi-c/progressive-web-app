import { useEffect, useRef, useState } from "react";
import useTakePicture from "../hooks/useTakePicture";

function CameraFeed({ setFlash }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const { takePicture } = useTakePicture(
    videoRef,
    canvasRef,
    setFlash,
    setPreviewImage
  );

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

  const startCountdown = () => {
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      setCountdown(null);
      takePicture();
    }, 3000);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted className="video"></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      {countdown ? (
        <div className="countdown">{countdown}</div>
      ) : (
        <button
          className="take-picture"
          title="Click to take a picture!"
          onClick={startCountdown}
        >
          click to take a picture 📸
        </button>
      )}
      {previewImage && (
        <div className="preview-container">
          <img
            className="preview-image"
            src={previewImage}
            alt="Preview"
            width={videoRef.current.videoWidth}
            height={videoRef.current.videoHeight}
          />
          <button
            className="preview-button"
            onClick={() => setPreviewImage(null)}
          >
            retake
          </button>
        </div>
      )}
    </div>
  );
}

export default CameraFeed;
