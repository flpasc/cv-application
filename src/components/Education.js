import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import EducationLine from './helper/EducationLine'

export default function Education(props) {
  const educationElements = props.education.map((edu) => {
    return <EducationLine key={uuidv4()} education={edu} />
  })

  return (
    <div className='education'>
      <div className='div-title'>Education</div>
      <div className='education--container'>{educationElements}</div>
    </div>
  )
}
