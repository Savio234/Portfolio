import React from 'react'
import experienceIcon from '../../assets/svgs/experience.png'
import educationIcon from '../../assets/svgs/education.png'
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
                  1+ years
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About