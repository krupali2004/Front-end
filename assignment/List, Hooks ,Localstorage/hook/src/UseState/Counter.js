import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleincrement = () => {
        setCount(count + 1);
    }

    const handledecrement = () => {
        setCount(count -1);
    }
  return (
    <div>
        <h2>Counter App</h2>
        <p>Current count: {count}</p>
        <button onClick={handleincrement}>Increment</button>{' '}
        <button onClick={handledecrement}>Decrement</button>
    </div>
  )
}

export default Counter
