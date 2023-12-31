import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({img, title, repoLink, demoLink}) => {
  return (
    <div className='projectCard'>
        <div className="cardImage">
            <img src={img} alt="" />
        </div>
        <div className="card-header">
            <h1>{title}</h1>
        </div>
        <div className="btns flex align-center">
            <a target='_blank' rel='noreferrer' href={`${repoLink}`}>
                <div className="card-btn flex align-center">
                    <h6 className='card_btn-text'>Github</h6>
                </div>
            </a>
            <a target='_blank' rel='noreferrer' href={demoLink}>
                <div className="card-btn flex align-center">
                    <h6 className='card_btn-text'>Live demo</h6>
                </div>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard