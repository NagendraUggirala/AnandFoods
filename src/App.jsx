import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layout'
import Hero from './components/Hero'

export default function App() {
  return (
  <Router>
  <Routes>
    <Route path='/' element={<MainLayout/>}>
     <Route index element={<Hero/>}/> 

    </Route>
  </Routes>
  </Router>
  )
}
