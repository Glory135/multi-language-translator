import { Outlet } from 'react-router-dom'
import './App.css'
import Topbar from './components/Topbar'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css";
import Footer from './components/Footer'


function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div className='main'>
        <div className='gradient' />
      </div>
      <main className='app'>
        <div className="top-container">
          <Topbar />
        </div>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
