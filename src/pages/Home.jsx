import React from 'react'
import { Hero, About, Experience, Contact, Footer, Projects } from '../components'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage