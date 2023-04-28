
import './App.scss'
import './mobile.scss'

import { AuthContext } from './context/AuthContext'
import Chat from './pages/ChatApp'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from 'react'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import Landing from './components/Landing/Landing'

function App() {
  
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);

  return (
     <>
     
     <BrowserRouter>
     <Routes>
      
      <Route path='/' element={<Landing/>} />
      <Route path='/chat'  element={<Chat/>} />
      </Routes>

      </BrowserRouter>
      </>
  
  )
}

export default App
