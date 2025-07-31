import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './assets/LoginPage/Login'
import ProtectedRoute from './assets/VotePage/ProtectedRoute.jsx'
import Home from './assets/VotePage/Home.jsx'
import AutoLogout from './AutoLogout.jsx'
import ThankYouPage from './assets/LoginPage/ThankYouPage.jsx'

function App() {

  return (
      <>
      <AutoLogout/>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={  
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
              } >
          </Route>
          <Route path='/ThankYou' element={<ThankYouPage/>}/>
      </Routes>
      </>
  )
}

export default App
