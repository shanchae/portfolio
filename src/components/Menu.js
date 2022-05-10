import React from 'react'

function Menu({scroll}){

  return (
        <nav className='w-full hidden md:flex justify-center pt-5 bg-transparent'>
            <ul className='flex space-x-8 text-fuchsia-600'>
                <li className='navBtn' id='about-me' onClick={scroll}>ABOUT ME</li>
                <li className='navBtn'id='skills' onClick={scroll}>SKILLS</li>
                <li className='navBtn' id='works' onClick={scroll}>WORKS</li>
                <li className='navBtn' id='contact-me' onClick={scroll}>CONTACT ME</li>
            </ul>
        </nav>
  )
}

export default Menu