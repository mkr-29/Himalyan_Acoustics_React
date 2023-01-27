import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import TempDif from '../../Prod_Cat/Diffusion/TempDif'

export default function MovPart() {
  return (
    <div>
        <Header/>
        <TempDif
            title="Movable Partitions"
        />
        <Footer/>
    </div>
  )
}
