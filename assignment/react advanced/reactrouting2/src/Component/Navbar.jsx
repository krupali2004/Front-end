import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul style={{display:'flex', gap:'1rem', listStyle:'none', backgroundColor:'green' }}>
            <li><Link to="/" style={{textDecoration:'none', color:'white'}}>[Home]</Link></li>
            <li><Link to="/About" style={{textDecoration:'none', color:'white'}}>[About]</Link></li>
            <li><Link to="/Contact" style={{textDecoration:'none', color:'white'}}>[Contact]</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
