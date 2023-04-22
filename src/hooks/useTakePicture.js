import { useState } from "react";

function useTakePicture(videoRef, canvasRef) {
  const [flash, setFlash] = useState(false);

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      // Set canvas dimensions to match video dimensions
      const videoWidth = videoRef.current.videoWidth;
      const videoHeight = videoRef.current.videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Draw video frame to canvas
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

      // Convert canvas to data URL and download as a file
      const dataUrl = canvasRef.current.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "photo.png";
      a.click();

      // Trigger the flash animation
      setFlash(true);
      setTimeout(() => {
        setFlash(false);
      }, 500);
    }
  };

  return [takePicture, flash];
}

export default useTakePicture;
