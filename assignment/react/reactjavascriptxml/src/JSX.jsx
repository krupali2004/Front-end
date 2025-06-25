import React from 'react'

function JSX() {
    const description ="JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.";
  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>{description}</p>
    </div>
  )
}

export default JSX
