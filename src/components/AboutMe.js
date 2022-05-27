import React from 'react'
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

function AboutMe() {
  return (
    <div className='w-10/12 h-screen md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center'>
      <div className='flex justify-center text-fuchsia-600 text-4xl'>ABOUT ME</div>
        <div className='text-zinc-200 flex flex-col space-y-5 font-mono text-sm'>
          <div>I'm currently in my junior year in college studying Bachelor of Science in Information Systems. However, I would say most of my skills are self-taught. I have used online resources, like YouTube tutorials, Stack Overflow, etc. to help me make projects and gain inspirations on what I should try to build. I am keen to learn new things and apply what I have learned in facing challenges.</div>
          <div>I aspire to become a full stack developer someday, creating appealing and functional sites and applications.</div>
          <div>I also possess interests in films, books, food, travel and discovering things on the internet. I often enjoy my time alone but I also enjoy being around with people.</div>
          <div className='flex justify-evenly text-4xl pt-4'>
            <a href="https://github.com/shanchae" target='_blank' rel='noreferrer'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shannen-du-b9264b238/" target='_blank' rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
      </div>   
    </div>
      
  )
}

export default AboutMe