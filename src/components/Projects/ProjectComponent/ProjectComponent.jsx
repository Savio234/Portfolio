import React from 'react';
import { useGlobalContext } from "../../../contexts/AppContext";
import ProjectCard from '../ProjectCard/ProjectCard';
import projectData from '../../../mock/projectData';
import './ProjectComponent.css';

const ProjectComponent = () => {
  const { theme } = useGlobalContext();
  return (
    <section id='project-components' data-theme={theme} className='project-components-wrapper'>
      <h1 className='h1'>All Projects</h1>
      <h3 className='h3'>Explore my complete portfolio of web applications and digital solutions</h3>
      <div className='cards-container'>
        {projectData.map((item, index) =>
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
    </section>
  )
}

export default ProjectComponent