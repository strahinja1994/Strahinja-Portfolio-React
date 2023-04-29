import React from 'react'
import {dataProjects} from './DataProjects';
import {BsArrowRightShort} from 'react-icons/bs';

export default function Projects() {

    const projects = dataProjects.map((project,index) => {
        return(
            <div className='work__project' key={project.id}>
                <img src={project.src} alt={project.title} className='work__project-image' />
                <h2 className='work__project-title'>{project.title}</h2>
                <div className='work__project-links'>
                    <a href={project.git} target='_blank' rel="noreferrer"  className='work__project-git'>Github</a>
                    <a href={project.more} target='_blank' rel="noreferrer"  className='work__project-more'>More <BsArrowRightShort style={{fontSize:'20px'}} /></a>
                </div>
            </div>
        )
    });

  return (
    <div id='projects' className='work'>
      <h1 className='work__title'>My work</h1>
      <div className='work__projects'>
        {projects}
      </div>
    </div>
  )
}

