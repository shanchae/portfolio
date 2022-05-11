import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'


function HamburgerMenu({scroll}) {
    const [ isOpen, setIsOpen ] = useState(false)

  return (
      <div className={`md:hidden flex flex-row-reverse ${!isOpen ?"-translate-x-40" : "translate-x-0"} transition-all duration-300 ease-in-out`}>
          <FiMenu 
            className={`text-7xl text-fuchsia-700 p-4 cursor-pointer ${!isOpen ?"rotate-0" : "rotate-90"} transition-all duration-300 ease-in-out`} 
            onClick={() => setIsOpen(!isOpen)}    
        />

        <nav className='w-40 h-screen bg-fuchsia-600 px-4'>
                <ul className='flex flex-col text-gray-200 pt-10'>
                    <li className='navBtn border-b' id='about-me' onClick={scroll}>ABOUT ME</li>
                    <li className='navBtn border-b'id='skills' onClick={scroll}>SKILLS</li>
                    <li className='navBtn border-b' id='works' onClick={scroll}>WORKS</li>
                    <li className='navBtn border-b' id='contact-me' onClick={scroll}>CONTACT ME</li>
                </ul>
            </nav>
      </div>
  )
}

export default HamburgerMenu