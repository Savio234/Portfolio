import React from 'react';
// import profile from '../../assets/svgs/profile-pic.png';
import profile from '../../assets/svgs/my_image_1.jpg';
import { useGlobalContext } from "../../contexts/AppContext";
import Resume from '../../assets/svgs/Resume.pdf'
import github from '../../assets/svgs/github.svg'
import linkedln from '../../assets/svgs/linkedin.svg'
import './Hero.css'

const Hero = () => {
  // const handleDownload = () => {
  //   const blob = new Blob([Resume], { type: 'text/plain' })
  //   const link = document.createElement('a')
  //   link.download = 'resume-example.pdf'
  //   link.href = window.URL.createObjectURL(blob)

  //   document.body.appendChild(link)
  //   link.click()

  //   document.body.removeChild(link)
  // }
  const { theme } = useGlobalContext();
  return (
    <section id='profile' data-theme={theme} className='profile-wrapper'>
      <div className='profile-container flex-center flex'>
        <div className="profile-picture">
          <img src={profile} alt="" />
        </div>

        <div className="profile-text">
          <p className='margin-0'>Hello I'm</p>
          <h1 className='margin-0'>Dominic Ezeifejafor</h1>
          <h3 className='margin-0'>Frontend web developer</h3>
          <div className="profile-btns flex flex-center">
            <div onClick={() => window.open(Resume)}
              className="profile-btn flex align-center cv"
            >
              Download CV
            </div>
            <div className="profile-btn flex align-center contact">
              <a href="#contact">
                Contact Info
              </a>
            </div>
          </div>
          <div className="profile-icons flex align-center">
            <a target='blank' href="https://www.linkedin.com/in/ezeifejafor-dominic">
              {theme === 'light' && (
                <div className='profile-icon'>
                  <img src={linkedln} alt="" />
                </div>
              )}
              {theme === 'dark' && (
                <div className='profile-icon-dark flex align-center'>
                  <div className='profile-icon'>
                    <img src={linkedln} alt="" />
                  </div>
                </div>
              )}
            </a>
            <a target='blank' href="https://github.com/savio234">
              {theme === 'light' && (
                <div className='profile-icon'>
                  <img src={github} alt="" />
                </div>
              )}
              {theme === 'dark' && (
                <div className='profile-icon-dark flex align-center'>
                  <div className='profile-icon'>
                    <img src={github} alt="" />
                  </div>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero