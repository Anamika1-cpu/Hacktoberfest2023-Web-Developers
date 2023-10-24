import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

function Home() {
  return (
    <>
     <Header/> 
     <Skills/> 
     <Projects/>
     <Contact/>
  
    </>
  )
}

export default Home