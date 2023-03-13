import React from 'react'

export default function EducationLine(props) {
  const { location, level } = props.education

  console.log(props)
  return (
    <div className='education'>
      <div className='education--level'>{level}</div>
      <div className='education--location'>{location}</div>
    </div>
  )
}
