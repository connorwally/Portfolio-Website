import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import './App.css'
import React from 'react';

function App() {

  return (
    <div className="body">
    <Navbar></Navbar>
    <HomePage></HomePage>
    <AboutPage></AboutPage>
    <ProjectsPage></ProjectsPage>
    <ContactPage></ContactPage>
    </div>
  )

}

export default App
