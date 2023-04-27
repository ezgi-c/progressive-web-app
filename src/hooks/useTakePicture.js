const useTakePicture = (videoRef, canvasRef, setFlash, setPreviewImage) => {
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
      // Convert canvas to data URL and set as preview image
      const dataUrl = canvasRef.current.toDataURL("image/png");
      setPreviewImage(dataUrl);

      // Trigger the flash animation
      setFlash(true);
      // Set the body background color to white
      document.body.style.backgroundColor = "white";
      setTimeout(() => {
        setFlash(false);
        // Reset the body background color
        document.body.style.backgroundColor = "";
      }, 100);
    }
  };
  return { takePicture };
};

export default useTakePicture;
