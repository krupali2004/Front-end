import { useRef, useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");
  const renderCount = useRef(1);

  renderCount.current++;
  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Example: Avoide Re-render</h1>

      <input
      type="text"
      placeholder="Type SOmething.."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />

      <p>Input Value: {inputValue}</p>
      <p>Component Rendered: {renderCount.current}times</p>    
    </div>
  );
}

export default App;
