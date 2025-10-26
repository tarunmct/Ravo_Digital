// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Banner2 from './components/Banner/Banner2'
import Email from './components/Email/Email'
import Footer from './components/Footer/Footer'

// Import the missing 'AboutUs.jsx' component
import AboutUs from './components/About/AboutUs'

// Import the service pages (assuming these are in a 'pages' directory)
import DigitalMarketing from './pages/DigitalMarketing'
import ITServices from './pages/ITServices'
import EventManagement from './pages/EventManagement'

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Cards />
            <Banner />
            <Service />
            <Banner2 />
            <Email />
          </>
        } />

        {/* About Page */}
        <Route path="/about" element={<AboutUs />} />
        
        {/* Contact Page: This is the route you asked for */}
        <Route path="/contact" element={<Banner2/>} />
        
        {/* Service Dropdown Pages and Frames (Event Management) */}
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/event-management" element={<EventManagement />} />
        {/* Note: The 'Frames' link in Navbar also uses '/event-management' path. */}
        
      </Routes>
      <Footer />
    </main>
  )
}

export default App