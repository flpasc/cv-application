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
  const [educationInput, setEducationInput] = useState({
    location: '',
    level: '',
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

  function handleAddEducation(event) {
    event.preventDefault()
    const newEducation = educationInput

    if (newEducation.location.trim() === '' || newEducation.level.trim() === '')
      return

    setEducationInput({
      location: '',
      level: '',
    })

    props.setUser((prevUser) => {
      return {
        ...prevUser,
        education: [...prevUser.education, newEducation],
      }
    })
  }

  function deleteProject(event) {
    event.preventDefault()
    const id = event.target.previousSibling.textContent

    const newProjects = props.user.projects.filter((project) => {
      return project.title !== id
    })

    props.setUser((prevUser) => {
      return {
        ...prevUser,
        projects: newProjects,
      }
    })
  }

  function handleProjectsChange(event) {
    const { name, value } = event.target

    setProjectInput((prevInput) => ({ ...prevInput, [name]: value }))
  }

  function handleCommunicationChange(event) {
    setLanguage(event.target.value)
  }

  function handleExperienceChange(event) {
    setTools(event.target.value)
  }

  function handleEducationChange(event) {
    const { name, value } = event.target
    setEducationInput((prevEducation) => ({ ...prevEducation, [name]: value }))
  }

  const projectsElements = projects.map((proj) => {
    return (
      <div className='taskbar--project' key={uuidv4()}>
        {proj.title}
        <button onClick={deleteProject} className='taskbar--delete'>
          x
        </button>
      </div>
    )
  })

  const languagesElements = languages.map((lang) => {
    return <Skill key={uuidv4()} lang={lang} />
  })

  const communicationElements = communication.map((comm) => {
    return <Skill key={uuidv4()} lang={comm} />
  })

  const educationElements = education.map((edu) => {
    return <div key={uuidv4()}>{edu.location}</div>
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
          <div className='projects--taskbar'>{projectsElements}</div>
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
        <div className='form--lang'>{educationElements}</div>
        <label htmlFor='Location'>Location:</label>
        <input
          onChange={handleEducationChange}
          type='text'
          name='location'
          id='location'
          value={educationInput.location}
        />
        <label htmlFor='level'>Level of education:</label>
        <input
          type='text'
          id='level'
          name='level'
          value={educationInput.level}
          onChange={handleEducationChange}
        />
        <button onClick={handleAddEducation}>Add</button>
      </fieldset>
    </form>
  )
}
