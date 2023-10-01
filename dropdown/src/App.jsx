import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h1>Color changer</h1>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option></option>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </select>

      <p style={{ color }}>This is a colored paragraph.</p>
    </div>
  );
}

export default App;