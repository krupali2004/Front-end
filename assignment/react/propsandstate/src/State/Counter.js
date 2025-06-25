import React,{ useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1> state Counter </h1>
       <h2>Current count: {count}</h2>
       <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter
