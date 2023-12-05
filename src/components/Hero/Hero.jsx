import React from 'react'
import profile from '../../assets/svgs/profile-pic.png'
import './Hero.css'

const Hero = () => {
  return (
    <section id='profile'>
      <div className='profile-container flex-center flex'>
        <div className="profile-picture">
          <img src={profile} alt="" />
        </div>

        <div className="profile-text">
          <p className='margin-0'>Hello I'm</p>
          <h1 className='margin-0'>Dominic Ezeifejafor</h1>
          <h3 className='margin-0'>Frontend web developer</h3>
          <div className="profile-btns flex flex-center">
            <div onClick={window.open('./assets/svgs/resume-example.pdf')} className="profile-btn flex align-center cv">
              Download CV
            </div>
            <div className="profile-btn flex align-center contact">
              <a href="#contact">
                Contact Info
              </a>
            </div>
          </div>
          <div className="profile-icons flex flex-center">
            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero