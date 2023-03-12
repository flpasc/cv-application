import React from 'react'

export default function Project(props) {
  const { title, tech, description } = props.project
  return (
    <div className='project'>
      <h4 className='project--title'>{title}</h4>
      <div className='project--tech'>{tech}</div>
      <p className='project--text'>{description}</p>
    </div>
  )
}
