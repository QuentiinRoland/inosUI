import React from 'react'

const BenefitsSection = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='flex gap-4'>
            <div className='w-1/2 flex flex-col gap-2'>
                <h1>Why use this platform?</h1>
                <p>This isn’t theory-heavy. It’s hands-on, visual, and made for builders.
                You’ll learn by example — not by scrolling through endless theory.
                Everything is visual and practical, crafted for both developers and designers.
                The platform plays perfectly with modern tools like React, Tailwind, and design systems.
                New tutorials, UI kits and components are added regularly to help you build faster and better.
                👉 Want to stay ahead?
                Join the newsletter to get exclusive updates, tips, and early access to what’s coming next.</p>
                <button>Join the newsletter</button>
            </div>
            <div className='w-1/2'>
                <div className='w-full h-full bg-gray-300'></div>
            </div>
        </div>
    </div>
  )
}

export default BenefitsSection