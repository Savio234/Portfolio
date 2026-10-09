import React from 'react'
import { useGlobalContext } from "../../contexts/AppContext";
import './ProjectCard.css'

const ProjectCard = ({ img, title, subtext, repoLink, demoLink, type, category, index }) => {
    const { theme } = useGlobalContext();
    return (
        <div data-theme={theme} className='projectCard'>
            <div className="cardImage">
                <img src={img} alt="" />
                <div className="cardImage-overlay"></div>
                {typeof index !== 'undefined' && (
                    <span className="card-index">{String(index).padStart(2, '0')}</span>
                )}
                {category && <span className="card-category">{category}</span>}
            </div>
            <div className="card-header">
                <h1>{title}</h1>
            </div>
            <div className="card-text">
                <h3>{subtext}</h3>
            </div>
            {!(type === 'admin') && (
                <div className="btns flex align-center">
                    <a target='_blank' rel='noreferrer' href={`${repoLink}`}>
                        <div className="card-btn flex align-center git-btn">
                            <h6 className='card_btn-text'>Github</h6>
                        </div>
                    </a>
                    <a target='_blank' rel='noreferrer' href={demoLink}>
                        <div className="card-btn flex align-center live-btn">
                            <h6 className='card_btn-text'>Live demo</h6>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default ProjectCard
