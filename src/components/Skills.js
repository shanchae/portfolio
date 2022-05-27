import React from 'react'
import { 
    SiFirebase, 
    SiReact, 
    SiNextdotjs, 
    SiVuedotjs,
    SiPhp,
    SiPhpmyadmin,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiStyledcomponents,
    SiSass,

} from 'react-icons/si'

function Skills() {
    return (   
        <div className='w-10/12 h-screen md:w-8/12 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center'>
            <div className='flex justify-center text-fuchsia-600 text-5xl'>SKILLS</div>
            <ul className='text-zinc-200 grid grid-cols-3 lg:grid-cols-5 gap-6'>
                <li className='skills'><SiHtml5 className='text-5xl pb-2'/>HTML5</li>
                <li className='skills'><SiCss3 className='text-5xl pb-2'/>CSS3</li>
                <li className='skills'><SiJavascript className='text-5xl pb-2'/>Javascript</li>
                <li className='skills'><SiPhp className='text-5xl pb-2'/>PHP</li>
                <li className='skills'><SiPhpmyadmin className='text-5xl pb-2'/>PhpMyAdmin</li>
                <li className='skills'><SiMysql className='text-5xl pb-2'/>MySQL</li>
                <li className='skills'><SiReact className='text-5xl pb-2'/>React</li>
                <li className='skills'><SiNextdotjs className='text-5xl pb-2'/>Next.js</li>
                <li className='skills'><SiVuedotjs className='text-5xl pb-2'/>Vue.js</li>
                <li className='skills'><SiSass className='text-5xl pb-2'/>Sass</li>
                <li className='skills'><SiTailwindcss className='text-5xl pb-2'/>Tailwindcss</li>
                <li className='skills'><SiStyledcomponents className='text-5xl pb-2'/>StyledComponents</li>
                <li className='skills'><SiFirebase className='text-5xl pb-2'/>Firebase</li>
                
            </ul>
        </div>
      )
}

export default Skills