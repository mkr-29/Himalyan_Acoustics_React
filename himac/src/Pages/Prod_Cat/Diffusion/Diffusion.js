import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import "../Absorption/Absorption.css"
import Elegant_Wood from "./Assets/elegant-wod.jpg"
import MF_HF_Diffuser from "./Assets/mf-difuser.jpg"
import Concave_Diffuser from "./Assets/concave-difuse.jpg"
import Pyramid_Diffuser from "./Assets/pyramid-difuse.jpg"
import Footer from '../../Homepage/Components/Footer/Footer'
import TempDif from './TempDif'

export default function Diffusion() {
  return (
    <div>
        <Header/>
        <TempDif
            title="Diffusion"
            description="Diffusion, is called the spreading of sound energy evenly in a given environment. Same reverberation time at any listening position makes the room perfect in acoustics. Most interior spaces are non-diffusive which means the reverberation time is considerably different around the room. At low frequencies they suffer from prominent resonances called room modes. Diffusers are used to treat sound aberrations, such as echoes, in rooms. They are an excellent alternative or complement to sound absorption because they do not remove sound energy, but can be used to effectively reduce distinct echoes and reflections while still leaving a live sounding space. Compared to a reflective surface, which will cause most of the energy to be reflected off at an angle equal to the angle of incidence, a diffusor will cause the sound energy to be radiated in many directions, hence leading to a more diffusive acoustic space. It is also important that a diffusor spreads reflection in time as well as spatially. Diffusors can aid sound diffusion, but this is not why they are used in many cases; they are more often used to remove coloration and echoes."
            img1={Elegant_Wood}
            imgt1="ELEGANT WOOD"
            img2={MF_HF_Diffuser}
            imgt2="MF HF DIFFUSER"
            img3={Concave_Diffuser}
            imgt3="CONCAVE DIFFUSER"
            img4={Pyramid_Diffuser}
            imgt4="PYRAMID DIFFUSER"
        />
        <div className="footer_gap"/>
        <Footer/>
    </div>
  )
}
