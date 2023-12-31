import Nav from '../components/Nav.tsx'
import Experience from '../main/Experience.tsx'
import Home from '../main/Home.tsx'
import 'aos/dist/aos.css'
import { useState } from 'react'
import Education from '../main/Education.tsx'
import Certificate from '../main/Certificate.tsx'
import Skill from '../main/Skill.tsx'

import LS1 from '../components/LS1.tsx'
import LS2 from '../components/LS2.tsx'
import LS3 from '../components/LS3.tsx'
function Main({loading,setLoading}:any) {

    const [cursorX, setCursorX] = useState<number>(0);
    const [cursorY, setCursorY] = useState<number>(0);
  
    window.addEventListener('mousemove', (e: any) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    })
    
    return (
        loading == 0 ?
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
            : loading === 1 ? (
                <LS1 setLoading={setLoading}></LS1>
            ) : loading === 2 ? (
                <LS2 setLoading={setLoading}></LS2>
            ) : loading === 3 ? (
                <LS3 setLoading={setLoading}></LS3>
            ) : null
    )
}

export default Main
