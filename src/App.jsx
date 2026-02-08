import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from "./pages/Error";
import License from "./components/License";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <License />
    </Router> 
    </>
  )
}

export default App;
