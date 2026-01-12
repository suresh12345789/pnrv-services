import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Common/Navbar/Navbar'
import Footer from './Common/Footer/Footer'
import Homepages from './Pages/Homepages'
import Aboutpages from './Pages/Aboutpages'
import Services from './Pages/Services'
import Bookingpages from './Pages/Bookingpages'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/about" element={<Aboutpages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Bookingpages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Contact />} />
        </Routes>

        <Footer />

      </Router>
    </div>
  )
}

export default App

