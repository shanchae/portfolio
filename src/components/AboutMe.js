import React from 'react'
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

function AboutMe() {
  return (
    <div className="w-10/12 h-screen md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
      <div className="flex justify-center text-fuchsia-600 text-5xl">
        ABOUT ME
      </div>
      <div className="text-zinc-200 flex flex-col space-y-4 font-mono">
        <div>
          I am keen to learn new things and apply what I have learned in facing
          challenges.
        </div>
        <div>
          Proficient in a variety of programming languages including HTML, CSS,
          JavaScript, and frameworks such as React. Experienced in responsive
          design and mobile-first development, ensuring optimal user experiences
          across all devices
        </div>
        <div className="flex justify-evenly text-4xl pt-4">
          <a
            href="https://github.com/shanchae"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shannen-du-b9264b238/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe