import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import MainContent from './components/MainContent'
import Footer from "./components/Footer"

const App =()=> {
 
  return (
    <>
      <Nav/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
