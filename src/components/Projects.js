import React from 'react'
import Project from './helper/Project'
import { v4 as uuidv4 } from 'uuid'

export default function Projects(props) {
  const projects = [props.projects]

  const projectElements = projects.map((project) => {
    return <Project project={project} key={uuidv4()} />
  })

  return (
    <div className='projects'>
      <div className='div-title'>Projects</div>
      <div className='project--container'>{projectElements}</div>
    </div>
  )
}
