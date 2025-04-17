import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App