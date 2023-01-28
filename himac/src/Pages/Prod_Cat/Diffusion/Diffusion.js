import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import "../Absorption/Absorption.css"
import ElegantWood from "./Assets/ElegantWod.jpg"
import MFHFDiffuser from "./Assets/MfDifuser.jpg"
import ConcaveDiffuser from "./Assets/ConcaveDifuse.jpg"
import PyramidDiffuser from "./Assets/PyramidDifuse.jpg"
import Footer from '../../Homepage/Components/Footer/Footer'
import TempDif from './TempDif'

export default function Diffusion() {
  return (
    <div>
        <Header/>
        <TempDif
            title="Diffusion"
            description="Diffusion, is called the spreading of sound energy evenly in a given environment. Same reverberation time at any listening position makes the room perfect in acoustics. Most interior spaces are non-diffusive which means the reverberation time is considerably different around the room. At low frequencies they suffer from prominent resonances called room modes. Diffusers are used to treat sound aberrations, such as echoes, in rooms. They are an excellent alternative or complement to sound absorption because they do not remove sound energy, but can be used to effectively reduce distinct echoes and reflections while still leaving a live sounding space. Compared to a reflective surface, which will cause most of the energy to be reflected off at an angle equal to the angle of incidence, a diffusor will cause the sound energy to be radiated in many directions, hence leading to a more diffusive acoustic space. It is also important that a diffusor spreads reflection in time as well as spatially. Diffusors can aid sound diffusion, but this is not why they are used in many cases; they are more often used to remove coloration and echoes."
            img1={ElegantWood}
            imgt1="ELEGANT WOOD"
            alt1="Elegant Wood"

            img2={MFHFDiffuser}
            imgt2="MF HF DIFFUSER"
            alt2="MF HF Diffuser"

            img3={ConcaveDiffuser}
            imgt3="CONCAVE DIFFUSER"
            alt3="Concave Diffuser"

            img4={PyramidDiffuser}
            imgt4="PYRAMID DIFFUSER"
            alt4="Pyramid Diffuser"
        />
        <div className="footergap"/>
        <Footer/>
    </div>
  )
}
