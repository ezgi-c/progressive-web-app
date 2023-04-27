import "./styles.css";
import { useState } from "react";
import CameraFeed from "./Components/CameraFeed";

function App() {
  const [flash, setFlash] = useState(false);

  return (
    <>
      <div className={`App ${flash ? "flash" : ""}`}>
        <header className="header">
          <h1 className="h1" testid="h1">
            <img className="icon" src="camera-icon.png" alt="camera icon" />
            Take a Picture
          </h1>
        </header>
        <CameraFeed setFlash={setFlash} />
      </div>
    </>
  );
}

export default App;
