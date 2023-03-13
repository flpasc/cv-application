import React from 'react'

export default function EducationLine(props) {
  const { location, level } = props.education

  return (
    <div className='education--item'>
      <div className='education--level'>{level}</div>
      <div className='education--location'>{location}</div>
    </div>
  )
}
