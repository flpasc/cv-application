import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import Education from './components/Education'
import Header from './components/Header'
import Info from './components/Info'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Form from './components/Form'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function App() {
  const printRef = useRef()
  const [user, setUser] = useState(
    // JSON.parse(localStorage.getItem('userInfo')) ||
    {
      name: 'Name Surname',
      job: 'Motivated Dev',
      tel: '0800 414141',
      town: 'Jena',
      country: 'Germany',
      email: 'hireme@now.com',
      git: 'github',
      linkedin: 'linkedin',
      info: 'As a self-taught front-end web developer with proficiency in React and Javascript, I have a passion for designing and developing aesthetically pleasing and functional web applications, and am dedicated to delivering quality results through my problem-solving skills and attention to detail.',
      skills: {
        languages: ['Javascript', 'React', 'HTML', 'CSS', 'Typescript'],
        communication: ['German(native)', 'English(fluent)'],
      },
      projects: [
        {
          title: 'Battleship',
          tech: ['js', 'html', 'css', 'jest'],
          description: ` This JavaScript project involves implementing the classic game ’Battleship’ using Test Driven Development, where the Ship and
Gameboard factories are created to simulate the game logic, and a Player object is created to play against the computer with
random moves, while the DOM is used to render the gameboards and receive user input for attacking.`,
        },
        {
          title: 'Weather App',
          tech: ['js', 'html', 'css'],
          description: `The Weather App project in the JavaScript Course involves creating a weather forecast site using a weather API, allowing users to
search for a specific location and toggle displaying the data in Fahrenheit or Celsius, and implementing security measures such
as storing API keys on the server to prevent unauthorized access.`,
        },
        {
          title: 'ToDo List',
          tech: ['js', 'html', 'css'],
          description: `The Todo List project for a JavaScript course involves creating a web application that dynamically generates todo items as
objects with properties like title, description, due date, priority, notes, and checklist, which can be organized into separate
projects and persisted using Web Storage API`,
        },
        {
          title: 'TicTacToe',
          tech: ['js', 'html', 'css'],
          description: `The project is to create a Tic Tac Toe game in JavaScript, utilizing modules and factories to minimize global code and including a
player vs computer option with an unbeatable AI using the minimax algorithm.`,
        },
      ],
      education: [
        {
          location: 'Jena',
          level: 'Abitur',
        },
      ],
    }
  )

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(user))
  }, [user])

  async function handleDownloadPdf() {
    const element = printRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('print.pdf')
  }

  function handleChange(event) {
    const { name, value } = event.target
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      }
    })
  }

  return (
    <>
      <div className='form'>
        <Form handleChange={handleChange} user={user} setUser={setUser} />
      </div>
      <div ref={printRef} className='print--container'>
        <Header
          name={user.name}
          surname={user.surname}
          job={user.job}
          tel={user.tel}
          town={user.town}
          country={user.country}
          email={user.email}
          git={user.git}
          linkedin={user.linkedin}
        />
        <Info info={user.info} />
        <Skills skills={user.skills} />
        <Projects projects={user.projects} />
        <Education education={user.education} />
      </div>
      <button className='btn-pdf' onClick={handleDownloadPdf}>
        Generate PDF
      </button>
    </>
  )
}

export default App
