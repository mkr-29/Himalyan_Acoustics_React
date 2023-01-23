import React from 'react'
import './Homepage.css'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Services from './Components/Services/Services'

export default function Homepage() {
  return (
    <div>
        <Header/>
        <Landing/>
        <Services/>
    </div>
  )
}
