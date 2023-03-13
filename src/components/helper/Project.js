import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Project(props) {
  const { title, tech, description } = props.project

  const techElements = tech.map((tech) => {
    return (
      <div key={uuidv4()} className='tech--element'>
        {tech}
      </div>
    )
  })

  return (
    <div className='project'>
      <h4 className='project--title'>{title}</h4>
      <div className='project--tech'>{techElements}</div>
      <p className='project--text'>{description}</p>
    </div>
  )
}
