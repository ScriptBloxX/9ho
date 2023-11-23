import './App.css'
import Nav from './components/Nav.tsx'
import Experience from './main/Experience.tsx'
import Home from './main/Home.tsx'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
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

  useEffect(()=>{
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1173940317536387073/g46_-yI4VVhKLV-BNy9ENGp4LFEa3TYBvFdoEzM9JYf8Yfd5v-HrtfxKthVW0vPXitah");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        content: "+1 Visitor"
      }

      request.send(JSON.stringify(params));
  },[])

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
