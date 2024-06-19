
import './App.css'

import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import Dashbord from './Pages/dashbord'
import About from './Pages/about'
import Projects from './Pages/projects'
import TalktoMe from './Pages/talktoMe'


export default function App() {
  return (
    <BrowserRouter basename="/nethindu-hansaka/">
     <header>
      <Routes>
        <Route path='/' element={<Dashbord />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/talktoMe' element={<TalktoMe />}></Route>
      </Routes>
      </header>

    </BrowserRouter>
    

  )
}


