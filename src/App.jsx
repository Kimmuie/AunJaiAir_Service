import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import ServicePage from "./pages/Service";
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
        <Route path="/service" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <License />
    </Router> 
    </>
  )
}

export default App;
