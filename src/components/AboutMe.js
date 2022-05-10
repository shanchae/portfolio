import React from 'react'

function AboutMe() {
  return (
    <div className='w-10/12 h-full md:w-8/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center'>
      <div className='flex justify-center text-cyan-600 text-5xl'>ABOUT ME</div>
        <div className='text-zinc-200 flex flex-col space-y-4 font-mono'>
          <div>I'm currently in my junior year in college studying Bachelor of Science in Information Systems. However, I would say most of my skills are self-taught. I have used online resources, like YouTube tutorials, Stack Overflow, etc. to help me make projects and gain inspirations on what I should try to build. I am keen to learn new things and apply what I have learned in facing challenges.</div>
          <div>I aspire to become a full stack developer someday, creating pleasing and compelling sites and applications.</div>
          <div>I also possess interests in films, books, food, travel and discovering things on the internet. I often enjoy my time alone but I also enjoy being around with people.</div>
      </div>   
    </div>
      
  )
}

export default AboutMe