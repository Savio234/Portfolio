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
        {projectData.map((item, index) =>
          <ProjectCard
            key={index}
            title={item.projectName}
            img={item.projectImg}
            repoLink={item.repoLink}
            demoLink={item.demoLink}
          />
        )}
      </div>
    </section>
  )
}

export default Projects