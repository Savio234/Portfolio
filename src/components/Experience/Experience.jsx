import React from 'react'
import { useGlobalContext } from "../../contexts/AppContext";
import experienceData from '../../mock/experienceData'
import checkmark from '../../assets/svgs/check.svg'
import './Experience.css'

const Experience = () => {
  const { theme } = useGlobalContext();
  return (
    <section id="experience" data-theme={theme} className='experience-wrapper'>
      <div className="experience-container">
        <p className='center'>Explore My</p>
        <h1 className='center'>EXPERIENCE</h1>

        <div className="content-container flex flex-center">
          <div className='content-card'>
            <h3 className='center content-card-h3'>Frontend Language</h3>
            <div className='content-sm-card flex flex-center flex-wrap'>
              {
                experienceData.slice(0, 5).map((item, index) =>
                  <div key={index} className="flex">
                    <div className="icon">
                      <img src={checkmark} alt="" />
                    </div>
                    <div className='content-text'>
                      <h2 className='content-text-h2'>{item.name}</h2>
                      <p className='content-text-p'>{item.level}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          <div className='content-card'>
            <h3 className='center content-card-h3'>Frontend frameworks</h3>
            <div className='content-sm-card flex flex-center flex-wrap'>
              {
                experienceData.slice(5, 10).map((item, index) =>
                  <div key={index} className="flex">
                    <div className="icon">
                      <img src={checkmark} alt="" />
                    </div>
                    <div className='content-text'>
                      <h2 className='content-text-h2'>{item.name}</h2>
                      <p className='content-text-p'>{item.level}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience