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

    if (
      newProject.title.trim() === '' ||
      newProject.tech.trim() === '' ||
      newProject.description.trim() === ''
    )
      return
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

  function deleteLanguage(event) {
    event.preventDefault()
    const id = event.target.previousSibling.textContent

    const newLanguages = props.user.skills.languages.filter((lang) => {
      return lang !== id
    })

    props.setUser((prevUser) => {
      return {
        ...prevUser,
        skills: {
          ...prevUser.skills,
          languages: newLanguages,
        },
      }
    })
  }

  function deleteCommunication(event) {
    event.preventDefault()
    const id = event.target.previousSibling.textContent

    const newCommunication = props.user.skills.communication.filter((comm) => {
      return comm !== id
    })

    props.setUser((prevUser) => {
      return {
        ...prevUser,
        skills: {
          ...prevUser.skills,
          communication: newCommunication,
        },
      }
    })
  }

  function deleteEducation(event) {
    event.preventDefault()
    const id = event.target.previousSibling.textContent

    const newEducation = props.user.education.filter((edu) => {
      return edu.location !== id
    })

    props.setUser((prevUser) => {
      return {
        ...prevUser,
        education: newEducation,
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
      <div className='taskbar--item' key={uuidv4()}>
        {proj.title}
        <button onClick={deleteProject} className='taskbar--delete'>
          x
        </button>
      </div>
    )
  })

  const languagesElements = languages.map((lang) => {
    return (
      <div className='taskbar--item' key={uuidv4()}>
        {lang}
        <button onClick={deleteLanguage} className='taskbar--delete'>
          x
        </button>
      </div>
    )
  })

  const communicationElements = communication.map((comm) => {
    return (
      <div className='taskbar--item' key={uuidv4()}>
        {comm}
        <button onClick={deleteCommunication} className='taskbar--delete'>
          x
        </button>
      </div>
    )
  })

  const educationElements = education.map((edu) => {
    return (
      <div className='taskbar--item' key={uuidv4()}>
        {edu.location}
        <button onClick={deleteEducation} className='taskbar--delete'>
          x
        </button>
      </div>
    )
  })

  return (
    <form onSubmit={handleSubmit} className='form--container'>
      <fieldset className='form--fieldset'>
        <legend>Personal Information</legend>
        <label htmlFor='name'>Name:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='text'
          value={name}
          name='name'
          id='name'
        />

        <label htmlFor='job'>Job:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='text'
          value={job}
          name='job'
          id='job'
        />

        <label htmlFor='tel'>Tel:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='tel'
          value={tel}
          name='tel'
          id='tel'
        />

        <label htmlFor='town'>Town:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='text'
          value={town}
          name='town'
          id='town'
        />

        <label htmlFor='country'>Country:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='text'
          value={country}
          name='country'
          id='country'
        />

        <label htmlFor='email'>Email:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='email'
          value={email}
          name='email'
          id='email'
        />

        <label htmlFor='git'>GitHub:</label>
        <input
          className='form--input'
          onChange={props.handleChange}
          type='text'
          value={git}
          name='git'
          id='git'
        />

        <label htmlFor='linkedin'>linkedIn:</label>
        <input
          className='form--input'
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
          className='form--input'
          onChange={handleExperienceChange}
          type='text'
          placeholder='Add a programming language or tool'
          name='lang'
          id='lang'
          value={tools}
        />
        <button
          className='btn-add'
          onClick={handleAdd}
          name='languages'
          type='button'
        >
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
          className='form--input'
        />
        <button
          className='btn-add'
          onClick={handleAdd}
          name='communication'
          type='button'
        >
          Add
        </button>

        <fieldset className='form--projects'>
          <legend>Projects</legend>
          <div className='taskbar'>{projectsElements}</div>
          <label htmlFor='projects'>Title: </label>
          <input
            className='form--input'
            onChange={handleProjectsChange}
            placeholder='Title'
            type='text'
            name='title'
            id='title'
            value={projectInput.title}
          />
          <label htmlFor='tech'>Used Tools:</label>
          <input
            className='form--input'
            type='text'
            name='tech'
            id='tech'
            placeholder='Used Technologies'
            onChange={handleProjectsChange}
            value={projectInput.tech}
          />
          <label htmlFor='projects-description'>Description:</label>
          <textarea
            className='form--textarea'
            type='text'
            name='description'
            id='project-description'
            placeholder='Describe your project'
            onChange={handleProjectsChange}
            value={projectInput.description}
          />
          <button
            className='btn-add'
            name='add-project'
            onClick={handleAddProject}
            type='button'
          >
            Add
          </button>
        </fieldset>
      </fieldset>

      <fieldset className='form--fieldset'>
        <legend>Education</legend>
        <div className='form--lang'>{educationElements}</div>
        <label htmlFor='Location'>Location:</label>
        <input
          className='form--input'
          onChange={handleEducationChange}
          type='text'
          name='location'
          placeholder='Where did you go'
          id='location'
          value={educationInput.location}
        />
        <label htmlFor='level'>Level of education:</label>
        <input
          className='form--input'
          type='text'
          id='level'
          placeholder='What did you earn'
          name='level'
          value={educationInput.level}
          onChange={handleEducationChange}
        />
        <button className='btn-add' onClick={handleAddEducation}>
          Add
        </button>
      </fieldset>
    </form>
  )
}
