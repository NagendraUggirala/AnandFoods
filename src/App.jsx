import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layout'
import Hero from './pages/Hero'
import AboutPage from './pages/About'
import Contact from './pages/Contact'
import Foods from './pages/Foods'
import AuthLayout from './components/AuthLayout'
import SignIn from './components/SignIn'
import Cart from './pages/Cart'
import Checkout from './components/Checkout'
import Signup from './components/Signup'
import FoodDetailsEnhanced from './components/FoodDetails'


import ScrollToTop from './components/ScrollToTop'





export default function App() {
  return (


    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foods" element={<Foods />} />
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Route>
        <Route path="/food/:foodName" element={<FoodDetailsEnhanced />} />
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>
    </Router>


  )
}
