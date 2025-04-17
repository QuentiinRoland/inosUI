import React from 'react'

const WhatYouLearnSection = () => {
  return (
    <div className=''>
        <div className='max-w-7xl mx-auto flex flex-col'>
            <div className='flex flex-col items-start'>
                <div className='flex flex-col gap-2'>
                    <h1>Design + Code: a practical approach</h1>
                    <p>You’ll not only learn how to choose the right colors, spacing or typography —
                        but also how to turn those design decisions into clean, scalable front-end code.
                        Perfect for developers, designers, and all the hybrids in between.</p>
                </div>
                <button className='self-end'>Start now</button>
            </div>
            <div className='grid grid-cols-3'>
                <div className='bg-gray-300 w-[400px] h-[400px]'></div>
                <div className='bg-gray-300 w-[400px] h-[400px]'></div>
                <div className='bg-gray-300 w-[400px] h-[400px]'></div>
            </div>
        </div>
    </div>
  )
}

export default WhatYouLearnSection