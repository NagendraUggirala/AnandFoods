import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layout'
import Hero from './components/Hero'
import AboutPage from './components/About'
import Contact from './components/Contact'
import Foods from './components/Foods'
import AuthLayout from './components/AuthLayout'
import SignIn from './components/SignIn'
import Cart from './components/Cart'





export default function App() {
  return (


    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foods" element={<Foods />} />

          <Route path="/cart" element={<Cart />} />


        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>

      </Routes>
    </Router>


  )
}
