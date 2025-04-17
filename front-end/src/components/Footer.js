import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div>
            <img src='' alt='Logo' />
            <p>Social Media</p>
        </div>
        <ul className='flex list-none gap-6'>
            <li><a href=''>Foundations</a></li>
            <li><a href=''>UI tips</a></li>
            <li><a href=''>Build with code</a></li>
            <li><a href=''>UI playground (soon)</a></li>
            <li><a href=''>Blog</a></li>
        </ul>
        <div>
            <h3>Join your newsletter</h3>
            <p>UI UX Designer / Developer community</p>
        </div>
    </div>
  )
}
