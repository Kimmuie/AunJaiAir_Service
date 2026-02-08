import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import NotFound from "./pages/Error";
import License from "./components/License";

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <License />
    </Router> 
    </>
  )
}

export default App;
