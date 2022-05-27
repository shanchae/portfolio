import React from 'react'
import avatar from '../assets/avatar.png'

function Main() {
  return (
      <div className='w-full bg-zinc-800'>
            <div className='w-11/12 md:w-5/12 mx-auto h-screen flex flex-col-reverse md:grid md:grid-cols-2 gap-8 justify-center items-center'>
                <div className='items-center text-zinc-200 text-left text-5xl'>
                    <p>
                        Hello.<br></br>
                        I'm Shannen.
                    </p>
                </div>
                <div className='max-w-[150px] mx-auto'>
                    <img 
                        className='object-contain'
                        src={avatar} alt="" 
                    />
                </div>
            </div>
      </div>
  )
}

export default Main