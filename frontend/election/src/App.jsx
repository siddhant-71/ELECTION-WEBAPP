import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Vote from './assets/VotePage/Vote.jsx'
import Login from './assets/LoginPage/Login'
import ProtectedRoute from './assets/VotePage/ProtectedRoute.jsx'
import Vote2 from './assets/VotePage/Vote2.jsx'
import Home from './assets/VotePage/Home.jsx'

function App() {

  return (
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Vote" element={  
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
              } >
          </Route>
      </Routes>
  )
}

export default App
