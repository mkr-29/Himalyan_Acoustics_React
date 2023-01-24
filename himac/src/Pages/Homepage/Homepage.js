import React from 'react'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import FromOwner from './Components/FromOwner/FromOwner'
import './Homepage.css'

export default function Homepage() {
  return (
    <div>
      <Header />
      <Landing />
      <Services />
      <FromOwner />
      <Footer />
    </div>
  )
}
