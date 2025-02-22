import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
}

export default App
