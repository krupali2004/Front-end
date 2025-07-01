import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/Action";


function App() {
  const count = useSelector((state) => state.count);
  const dispacth = useDispatch();
  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispacth(increment())}>Increment</button>
      <button onClick={() => dispacth(decrement())} style={{marginLeft: 10}}>
        Decrement</button>
    </div>
  );
}

export default App;
