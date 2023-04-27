import { useState, useEffect } from "react";

// Sure! Here's an example of a function that you can use to render dials that allow users to apply or adjust filters:

function FilterDials({ videoRef, setFilter }) {
    const [hue, setHue] = useState(0);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [saturate, setSaturate] = useState(100);
  
    useEffect(() => {
      // Apply the filters to the video element when the values change
      videoRef.current.style.filter = `hue-rotate(${hue}deg) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`;
      // Update the filter state with the current values
      setFilter({ hue, brightness, contrast, saturate });
    }, [hue, brightness, contrast, saturate]);
  
    return (
      <div className="filter-dials">
        <div className="filter-dial">
          <label>Hue</label>
          <input type="range" min="0" max="360" value={hue} onChange={(e) => setHue(e.target.value)} />
        </div>
        <div className="filter-dial">
          <label>Brightness</label>
          <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(e.target.value)} />
        </div>
        <div className="filter-dial">
          <label>Contrast</label>
          <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(e.target.value)} />
        </div>
        <div className="filter-dial">
          <label>Saturation</label>
          <input type="range" min="0" max="200" value={saturate} onChange={(e) => setSaturate(e.target.value)} />
        </div>
      </div>
    );
  }

export default FilterDials;
  
// This function takes two props: videoRef, which is a reference to the video element, and setFilter, which is a callback function that will be called whenever the filter values change. The function defines four state variables (hue, brightness, contrast, and saturate) that store the current values of the filter dials. The useEffect hook is used to apply the filters to the video element whenever the values change, and to update the filter state with the current values.

// The function returns a div that contains four filter dials (hue, brightness, contrast, and saturate) that the user can adjust. Each dial is implemented using an HTML input element of type range, which allows the user to slide a handle along a track to select a value. The value attribute of each input element is set to the corresponding state variable, and the onChange attribute is set to a callback function that updates the state variable whenever the value of the input element changes. When the state variables change, the useEffect hook applies the filters to the video element and calls the setFilter callback function to update the filter state.