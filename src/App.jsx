import { Outlet } from 'react-router-dom'
import './App.css'
import Topbar from './components/Topbar'

function App() {
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
      </main>
    </>
  )
}

export default App
