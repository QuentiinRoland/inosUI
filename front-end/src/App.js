import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import WhatYouLearnSection from './components/WhatYouLearnSection'
import { FoundationsSection } from './components/FoundationsSection/FoundationsSection'
import BenefitsSection from './components/BenefitsSection'
import CTA from './components/CTA'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroSection />
      <WhatYouLearnSection />
      <FoundationsSection />
      <BenefitsSection />
      <CTA />
      <Footer />
    </div>
  )
}

export default App