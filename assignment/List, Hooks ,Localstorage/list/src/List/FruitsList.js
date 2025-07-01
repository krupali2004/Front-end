import React from 'react'

function FruitsList() {
    const fruits = ['Apple', 'banana', 'mango', 'chikoo', 'sitafal'];
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index)=>(
            <li key={index}>{fruit}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default FruitsList;
