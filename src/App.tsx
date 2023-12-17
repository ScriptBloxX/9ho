import './App.css'
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Main from './main/Main';
import Project from './main/Project';

function App() {
  const [loading, setLoading] = useState<number>(1);

  // useEffect(()=>{
  //     const request = new XMLHttpRequest();
  //     request.open("POST", "https://discord.com/api/webhooks/1173940317536387073/g46_-yI4VVhKLV-BNy9ENGp4LFEa3TYBvFdoEzM9JYf8Yfd5v-HrtfxKthVW0vPXitah");

  //     request.setRequestHeader('Content-type', 'application/json');

  //     const params = {
  //       content: "+1 Visitor"
  //     }

  //     request.send(JSON.stringify(params));
  // },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main loading={loading} setLoading={setLoading} />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  )  
}

export default App
