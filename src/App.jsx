
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App
