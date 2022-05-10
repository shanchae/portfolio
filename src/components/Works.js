import React from 'react'
import Work from './Work'
import { works } from '../assets/works'

function Works() {
  return (
    <div className='w-full bg-zinc-800'>
      <div className='text-center text-5xl pt-10 text-fuchsia-700'>WORKS</div>
            <div className='w-9/12 py-20 mx-auto min-h-screen h-full grid grid-cols-1 md:grid-cols-2 gap-20 justify-center items-center'>
              
                {works.map((work) => (
                  <Work 
                    key={work.id}
                    work={work}
                  />
                ))}
                
            </div>
      </div>
  )
}

export default Works