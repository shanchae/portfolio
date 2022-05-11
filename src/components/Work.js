import React, { useState } from 'react'
import {
  FaGithub,
  FaFileCode
} from 'react-icons/fa'
import {
  MdOpenInBrowser
} from 'react-icons/md'
import {
  AiFillCloseSquare
} from 'react-icons/ai'

function Work({ work }) {
  const [ isClose, setisClose ] = useState(false)
  const [ isHovering, setIsHovering ] = useState(false)

  return (
    <div className={`relative h-full text-fuchsia-100 transition-all duration-300 ${isClose ? "bg-transparent" : "bg-fuchsia-200"}`}>
      <div className={`absolute w-full h-full flex flex-col space-y-2 justify-center items-center z-10 ${isClose ? "block" : "hidden"}`}
      >
        <FaFileCode
          onDoubleClick={() => setisClose(false)}
          className='text-4xl cursor-pointer'
        />
        <div className='text-base lowercase'>{work.appName}</div>
      </div>
      <div className={`h-full bg-transparent
      ${isClose && "opacity-0"}`}>
        <div className='flex justify-between p-1 m-1 bg-indigo-600 text-2xl'>
          <p>{work.appName}</p>
          <div className='flex space-x-2 items-center'>
            
            <AiFillCloseSquare 
              className='cursor-pointer'
              onClick={() => setisClose(true)}
            />
            
          </div>
        </div>
        <div className='p-2 h-full'>
          <div className='relative' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className={`flex items-center justify-center space-x-4 absolute w-full h-full bg-slate-400 ${isHovering ? "opacity-75" : "opacity-0"} text-4xl transition-opacity duration-300 ease-in-out`}>
              <a href={work.code} target="_blank" rel='noreferrer'><FaGithub/></a>
              <a href={work.vercel} target="_blank" rel='noreferrer'><MdOpenInBrowser/></a> 
            </div>
            <img
              src={work.imgURL} alt="project" 
            />
          </div>
                  
          <p className='text-xl text-gray-700 p-5'>{work.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Work