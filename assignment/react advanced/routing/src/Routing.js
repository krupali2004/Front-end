import React from 'react'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<><Home /></>}></Route>
                <Route path="/about" element={<><About /></>}></Route>
                <Route path="/about" element={<><Navbar /></>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing
