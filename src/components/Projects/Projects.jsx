import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import projectData from '../../mock/projectData'
import './Projects.css'

const Projects = () => {
  return (
    <section id="project">
      <div className="project-container">
        <p className='center'>Browse My Recent</p>
        <h1 className='center'>Projects</h1>
      </div>
      <div className="projectCard-container">
        {projectData.slice(0, 3).map((item, index) =>
          <ProjectCard
            key={index}
            title={item.projectName}
            img={item.projectImg}
            repoLink={item.repoLink}
            demoLink={item.demoLink}
            subtext={item?.subtext}
            type={item?.type}
          />
        )}
      </div>
      <div className='see-more-btn flex align-center'>
        <a rel='noreferrer' href="/projects">
          <div className='btn flex align-center'>
            <h3>View projects</h3>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Projects