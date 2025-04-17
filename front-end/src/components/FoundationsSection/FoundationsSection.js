import React from 'react'
import { foundationsCategories } from './foundationsCategories'
export const FoundationsSection = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col gap-2'>
      <div className='flex flex-row justify-between items-center'>
        <h2>Start with the Essentials</h2>
        <div className='flex flex-col gap-2'>
          <p>Learn the key building blocks of modern interface design — with ready-to-use examples, explanations, and code.</p>
          <button>Start now</button>
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foundationsCategories.map((cat, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{cat.title}</h3>
              <p className="text-gray-600">{cat.description}</p>
            </div>
          ))}
        </div>
 
    </div>
  )
}
