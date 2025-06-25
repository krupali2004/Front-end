import React from 'react'

function Usercards({name, age, location}) {
    const cardstyle = {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '16px',
        width: '250px',
        margin:'10px'        
    }
    const headingstyle ={
        fontSize: '1.rem',
        margin: '8px'
    }
  return (
    <div style={cardstyle}>

      <h2 style={headingstyle}>{name}</h2>
      <hr></hr>
      <p><strong>age:</strong>{age}</p>
      <p><strong>location:</strong>{location}</p>
    </div>
  )
}

export default Usercards
