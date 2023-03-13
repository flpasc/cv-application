import React from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Skills(props) {
  const { languages, communication } = props.skills

  const languagesElements = languages.map((lang) => {
    return (
      <div key={uuidv4()} className='skills--item'>
        {lang}
      </div>
    )
  })

  const communicationElements = communication.map((comm) => {
    return (
      <div key={uuidv4()} className='skills--item'>
        {comm}
      </div>
    )
  })

  return (
    <div className='skills'>
      <div className='div-title'>Skills</div>
      <div className='skills--container'>
        <div className='skills--tools'>
          Tools and Languages: {languagesElements}
        </div>
        <div className='skills--communication'>
          Communication: {communicationElements}
        </div>
      </div>
    </div>
  )
}
