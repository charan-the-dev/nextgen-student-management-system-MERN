import React from 'react'
import AddStudentdata from './components/AddStudentData'
import Getstudentdata from './components/GetStudentData'
import './App.css'

const App = () => {
  return (
    <div className='main-wrapper'>
      <AddStudentdata />
      <Getstudentdata />
    </div>
  )
}

export default App
