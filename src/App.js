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
    // JSON.parse(localStorage.getItem("userInfo")) ||
    {
      name: 'Awesome Dev',
      job: 'Master Hacker',
      tel: '0800 414141',
      town: 'Jena',
      country: 'Germany',
      email: 'hireme@please.com',
      git: 'github',
      linkedin: 'linkedin',
      info: 'Ad ante tincidunt massa arcu lacus netus maximus habitant nullam convallis augue fermentum venenatis aliquam finibus, iaculis curae eros senectus fusce non ac vehicula natoque congue nunc curabitur himenaeos euismod. Vitae pretium etiam rhoncus aliquet quis per est vel felis id vestibulum, ornare sociosqu praesent inceptos aptent suspendisse varius phasellus tempor dapibus.',
      skills: {
        languages: ['Javascript', 'React', 'HTML', 'CSS', 'Typescript'],
        communication: ['German(native)', 'English(fluent)'],
      },
      projects: [
        {
          title: 'Project1',
          tech: ['Next.js'],
          description:
            'Adipiscing class arcu phasellus non sit curae velit ullamcorper nisl ante.',
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
      <button onClick={handleDownloadPdf}>Generate PDF</button>
    </>
  )
}

export default App
