import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import QuizApp from './pages/Quiz-app'
import SpaceExplorer from './pages/space-app'
function App() {
 
  return <BrowserRouter>
  <Routes>
    <Route path='/quiz' Component={QuizApp}></Route>
    <Route path='/space' Component={SpaceExplorer}></Route>
  </Routes>
  
  </BrowserRouter>
   
  
}

export default App
