import React from 'react'
import experienceIcon from '../../assets/svgs/experience.svg'
import educationIcon from '../../assets/svgs/education.svg'
import profile from '../../assets/svgs/about-pic.png'
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <div className="about-container">
        <p className='center'>Get to know more</p>
        <h1 className='center'>About Me</h1>

        <div className="about-content flex align-center">
          <div className="content-img">
            <img src={profile} alt="" />
          </div>

          <div className='flex flex-column'>
            <div className="about-education flex flex-center">
              <div className="about-card center flex-column flex align-center">
                <div className="card-icon">
                  <img src={experienceIcon} alt="" />
                </div>
                <h3>Experience</h3>
                <p>
                  2 years
                  Frontend Development
                </p>
              </div>
              <div className="about-card center flex-column flex align-center">
                <div className="card-icon">
                  <img src={educationIcon} alt="" />
                </div>
                <h3>Education</h3>
                <p>
                  B.Eng Bachelors Degree
                </p>
              </div>
            </div>
            <div className="about-text">
              <p>
                I'm Dominic Ezeifejafor, a passionate and detail-oriented Frontend Developer based in Lagos, Nigeria. 
                I specialize in creating seamless, user-centric experiences using cutting-edge technologies 
                such as Next js, React js, typescript, tailwind etc. 
                My goal is to make the web a more accessible and enjoyable space for everyone. 
                Whether it's building pixel-perfect layouts or optimizing performance, 
                I am dedicated to delivering top-notch solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About