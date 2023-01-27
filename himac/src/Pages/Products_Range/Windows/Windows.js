import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import TempDif from '../../Prod_Cat/Diffusion/TempDif'

export default function Windows() {
  return (
    <div>
      <Header/>
      <TempDif
        title="Windows"
      />
      <Footer/>
    </div>
  )
}
