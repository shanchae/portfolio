import Main from "./components/Main";
import Header from "./components/Header";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import { useRef} from "react";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";


function App() {
  const aboutMeRef = useRef(null)
  const skillsRef = useRef(null)
  const worksRef= useRef(null)
  const contactRef= useRef(null)

  const onScroll = (id) => {

    switch (id) {
      case 'about-me':
       return window.scrollTo({
        top: aboutMeRef.current.offsetTop,
        behavior: 'smooth',
        block: 'start'
      })
        
      case 'skills':
        return window.scrollTo({
          top: skillsRef.current.offsetTop,
          behavior: 'smooth',
          block: 'start'
        })

      case 'works':
        return window.scrollTo({
          top: worksRef.current.offsetTop,
          behavior: 'smooth',
          block: 'start'
        })

      case 'contact-me':
        return window.scrollTo({
          top: contactRef.current.offsetTop,
          behavior: 'smooth',
          block: 'start'
        })

      default:
        return null
    }

    
  }

  return (
    <div className="w-full h-full  relative font-vt323">
      <Header
        onScroll={onScroll}
      />
      <Main/>
      <div className="h-full bg-zinc-700 flex flex-col py-40 gap-40 ">
        <div ref={aboutMeRef}>
          <AboutMe/>
        </div>
        <div ref={skillsRef}>
          <Skills/>
        </div>
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
