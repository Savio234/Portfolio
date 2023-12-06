import React from 'react'
import experienceData from '../../mock/experienceData'
import checkmark from '../../assets/svgs/checkmark.png'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <p className='center'>Explore My</p>
        <h1 className='center'>EXPERIENCE</h1>

        <div className="content-container flex flex-center">
          <div className='content-card'>
            <h3 className='center'>Frontend Language</h3>
            <div className='content-sm-card flex flex-center flex-wrap'>
              {
                experienceData.slice(0, 5).map((item, index) =>
                  <div key={index} className="flex">
                    <div className="icon">
                      <img src={checkmark} alt="" />
                    </div>
                    <div className='content-text'>
                      <h2>{item.name}</h2>
                      <p>{item.level}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>

          <div className='content-card'>
            <h3 className='center'>Frontend frameworks</h3>
            <div className='content-sm-card flex flex-center flex-wrap'>
              {
                experienceData.slice(5, 10).map((item, index) =>
                  <div key={index} className="flex">
                    <div className="icon">
                      <img src={checkmark} alt="" />
                    </div>
                    <div className='content-text'>
                      <h2>{item.name}</h2>
                      <p>{item.level}</p>
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