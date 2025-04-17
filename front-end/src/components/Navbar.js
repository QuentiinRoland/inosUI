import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-300'>
  <div className='max-w-7xl mx-auto flex items-center justify-between h-[70px]'>
    <div className='flex items-center gap-2'>
      <img src='' alt='logo' />
    </div>
    <ul className='flex list-none gap-6'>
      <li><a href=''>Foundations</a></li>
      <li><a href=''>UI tips</a></li>
      <li><a href=''>Build with code</a></li>
      <li><a href=''>UI playground (soon)</a></li>
      <li><a href=''>Blog</a></li>
    </ul>

    <button className='bg-red-600 text-white px-4 py-1 rounded'>Join the newsletter</button>
  </div>
</div>

  )
}

export default Navbar