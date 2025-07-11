import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/About" element={<About />}>About</Route>
          <Route path="/Contact" element={<Contact />}>Contact</Route>
      </Routes>
    </Router>
  );
}

export default App;
