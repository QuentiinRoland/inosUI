import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import WhatYouLearnSection from './components/WhatYouLearnSection'
import { FoundationsSection } from './components/FoundationsSection/FoundationsSection'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroSection />
      <WhatYouLearnSection />
      <FoundationsSection />
    </div>
  )
}

export default App