import './App.css'
import Nav from './components/Nav.tsx'
import Experience from './main/Experience.tsx'
import Home from './main/Home.tsx'
import 'aos/dist/aos.css'
import { useState } from 'react'
import Education from './main/Education.tsx'
import Certificate from './main/Certificate.tsx'
import Skill from './main/Skill.tsx'

function App() {
  const [cursorX, setCursorX] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);
  window.addEventListener('mousemove', (e: any) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  })
  return (
    <>
      <div className="cursor" style={{ left: cursorX - 35 + 'px', top: cursorY - 35 + 'px' }}></div>
      <Nav></Nav>
      <Home></Home>
      <Experience></Experience>
      <Certificate></Certificate>
      <Education></Education>
      <Skill></Skill>
      <footer>
        <h2>Thank you for reading until the end!</h2>
      </footer>
    </>
  )
}

export default App
