import './App.css'
import Nav from './components/Nav.tsx'
import Experience from './main/Experience.tsx'
import Home from './main/Home.tsx'
import 'aos/dist/aos.css'
import {useState} from 'react'

function App() {
  const [cursorX,setCursorX] = useState<number>(0);
  const [cursorY,setCursorY] = useState<number>(0);
  window.addEventListener('mousemove',(e:any)=>{
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  })
  return (
    <>
      <div className="cursor" style={{left:cursorX-35+'px',top:cursorY-35+'px'}}></div>
      <Nav></Nav>
      <Home></Home>
      <Experience></Experience>
    </>
  )
}

export default App
