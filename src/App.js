import "./styles.css";
import { useState, useRef } from "react";
import CameraFeed from "./Components/CameraFeed";
import useTakePicture from "./hooks/useTakePicture";

function App() {
  const [flash, setFlash] = useState(false);
  const canvasRef = useRef(null);
  const [takePicture] = useTakePicture(canvasRef);

  return (
    <>
      <div className={`App ${flash ? "flash" : ""}`}>
        <header className="header">
          <h1 className="h1" testid="h1">
            Take a Picture
          </h1>
        </header>
        <CameraFeed setFlash={setFlash} />
        <button
          className="take-picture"
          title="Click to take a picture!"
          onClick={takePicture}
        >
          Take a Picture 📸
        </button>
      </div>
    </>
  );
}

export default App;
