import React from 'react'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import FromOwner from './Components/FromOwner/FromOwner'
import './Homepage.css'
import Products from './Components/Products/Products'
import Whyus from './Components/WhyUs/Whyus'
import Client from './Components/Client/Client'

export default function Homepage() {
  return (
    <div>
      <Header />
      <Landing />
      <Services />
      <Products/>
      <Whyus/>
      <Client/>
      <FromOwner />
      <Footer />
    </div>
  )
}
