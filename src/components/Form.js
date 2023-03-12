import React, { useState, useEffect } from 'react'
import Skill from './helper/Skill'
import { v4 as uuidv4 } from 'uuid'

export default function Form(props) {
  const {
    name,
    job,
    tel,
    town,
    country,
    email,
    git,
    linkedin,
    info,
    skills,
    projects,
    education,
  } = props.user

  const { languages, communication } = skills

  const [tools, setTools] = useState('')
  const [language, setLanguage] = useState('')
  const [projectInput, setProjectInput] = useState({
    title: '',
    tech: '',
    description: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submit')
    // handle form submission here
  }

  function handleAdd(event) {
    const { name } = event.target

    props.setUser((prevUser) => {
      const updatedSkills = [...prevUser.skills[name]]

      const value = name === 'languages' ? tools : language
      if (
        !['communication', 'languages'].includes(name) ||
        value.trim() === ''
      ) {
        return prevUser
      }
      updatedSkills.push(value)

      return {
        ...prevUser,
        skills: {
          ...prevUser.skills,
          [name]: updatedSkills,
        },
      }
    })
  }

  function handleAddProject() {
    const newProject = projectInput
    setProjectInput({
      title: '',
      tech: '',
      description: '',
    })
    props.setUser((prevUser) => {
      return {
        ...prevUser,
        projects: [...prevUser.projects, newProject],
      }
    })
  }

  function handleProjectsChange(event) {
    const { name, value } = event.target

    console.log(projectInput)
    setProjectInput((prevInput) => ({ ...prevInput, [name]: value }))
  }

  function handleCommunicationChange(event) {
    setLanguage(event.target.value)
  }

  function handleExperienceChange(event) {
    setTools(event.target.value)
  }

  const languagesElements = languages.map((lang) => {
    return <Skill key={uuidv4()} lang={lang} />
  })

  const communicationElements = communication.map((lang) => {
    return <Skill key={uuidv4()} lang={lang} />
  })

  return (
    <form onSubmit={handleSubmit} className='form--container'>
      <fieldset className='form--fieldset'>
        <legend>Personal Information</legend>
        <label htmlFor='name'>Name:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={name}
          name='name'
          id='name'
        />

        <label htmlFor='job'>Job:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={job}
          name='job'
          id='job'
        />

        <label htmlFor='tel'>Tel:</label>
        <input
          onChange={props.handleChange}
          type='tel'
          value={tel}
          name='tel'
          id='tel'
        />

        <label htmlFor='town'>Town:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={town}
          name='town'
          id='town'
        />

        <label htmlFor='country'>Country:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={country}
          name='country'
          id='country'
        />

        <label htmlFor='email'>Email:</label>
        <input
          onChange={props.handleChange}
          type='email'
          value={email}
          name='email'
          id='email'
        />

        <label htmlFor='git'>GitHub:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={git}
          name='git'
          id='git'
        />

        <label htmlFor='linkedin'>linkedIn:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={linkedin}
          name='linkedin'
          id='linkedin'
        />
        <label htmlFor='info'>Info:</label>
        <textarea
          onChange={props.handleChange}
          className='form--textarea'
          type='text'
          value={info}
          name='info'
          id='info'
        />
      </fieldset>
      <fieldset className='form--fieldset'>
        <legend>Expierience</legend>
        <div className='form--lang'>
          <label htmlFor='lang'>Languages and Tools:</label>
          {languagesElements}
        </div>
        <input
          onChange={handleExperienceChange}
          type='text'
          placeholder='Add a programming language or tool'
          name='lang'
          id='lang'
          value={tools}
        />
        <button onClick={handleAdd} name='languages' type='button'>
          Add
        </button>
        <div className='form--lang'>
          <label htmlFor='skills'>Communication:</label>
          {communicationElements}
        </div>
        <input
          onChange={handleCommunicationChange}
          placeholder='Add your communication skills'
          type='text'
          name='skills'
          id='skills'
          value={language}
        />
        <button onClick={handleAdd} name='communication' type='button'>
          Add
        </button>

        <fieldset className='form--projects'>
          <legend>Projects</legend>
          <label htmlFor='projects'>Title: </label>
          <input
            onChange={handleProjectsChange}
            placeholder=''
            type='text'
            name='title'
            id='title'
            value={projectInput.title}
          />
          <label htmlFor='tech'>Used Tools:</label>
          <input
            type='text'
            name='tech'
            id='tech'
            onChange={handleProjectsChange}
            value={projectInput.tech}
          />
          <label htmlFor='projects-description'>Description:</label>
          <textarea
            className='form--textarea'
            type='text'
            name='description'
            id='project-description'
            onChange={handleProjectsChange}
            value={projectInput.description}
          />

          <button name='add-project' onClick={handleAddProject} type='button'>
            Add
          </button>
        </fieldset>
      </fieldset>
      <fieldset className='form--fieldset'>
        <legend>Education</legend>
        <label htmlFor='education'>Education:</label>
        <input
          onChange={props.handleChange}
          type='text'
          value={education}
          name='education'
          id='education'
        />
      </fieldset>
    </form>
  )
}
