import React from 'react'

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center justify-center gap-6'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-6xl'>Design smarter. Build better.</h1>
            <p className=''>Learn UI/UX by doing — explore visual foundations and turn them into production-ready components.</p>
        </div>
        <div className='flex gap-4'>
            <button className='bg-secondaryRed text-white'>Explore Foundations</button>
            <button>Join the newsletter</button>
        </div>
        <div className='bg-gray-500 w-[800px] h-[500px]'>
            <img src='' alt='' className='w-full h-full' />
        </div>
    </div>
  )
}

export default HeroSection