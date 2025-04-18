import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='max-w-7xl mx-auto flex justify-between items-center text-white'>
            <div className='flex flex-col gap-2'>
                <img src='' alt='Logo' />
                <p>Social Media</p>
            </div>
            <div className='flex flex-col gap-2'>
                <ul className='flex list-none gap-6'>
                    <li><a href=''>Foundations</a></li>
                    <li><a href=''>UI tips</a></li>
                    <li><a href=''>Build with code</a></li>
                    <li><a href=''>UI playground (soon)</a></li>
                    <li><a href=''>Blog</a></li>
                </ul>
                <div className='flex gap-4 justify-between'>
                    <div>
                        <h3>Join your newsletter</h3>
                        <p>UI UX Designer / Developer community</p>
                    </div>
                    <input name='newsletter' type='email' className='focus:outline-none border border-black'/>
                </div>
            </div>
        </div>
    </div>
  )
}
