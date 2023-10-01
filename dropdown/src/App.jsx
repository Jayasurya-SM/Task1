import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </select>

      <p style={{ color }}>This is a colored paragraph.</p>
    </>
  );
}

export default App;