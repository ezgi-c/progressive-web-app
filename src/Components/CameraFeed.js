function CameraFeed({ stream, videoRef, canvasRef }) {
  return (
    <div className="video-container">
      {stream && (
        <video ref={videoRef} autoPlay muted className="video"></video>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
}

export default CameraFeed;
