import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import "../Absorption/Absorption.css"
import Dampner_Sheet from "./Assets/damper-sheet.jpg"
import Isolator_Mount from "./Assets/isloator-mount.jpg"
import Vib_Curb_Sheet from "./Assets/vib-curb.jpg"
import Vib_Wall_Ceiling_Curb_Hanger from "./Assets/vib-wall.jpg"
import Vibration_Hanger from "./Assets/vibration-hanger.jpg"
import Wooden_Flooring from "./Assets/wooden-flor.jpg"
import TempVib from './TempVib'

export default function Vibration() {
  return (
    <div>
        <Header/>
        <TempVib
            title="Vibration"
            description="Vibration Isolation is a technique, where in resilient materials such as rubber, springs etc. are used to stop transmission of vibrations from source to other mediums. The main benefit of using this technique is that it isolates the source from spreading extra vibrations, indirectly blocking or reducing noise or sound emission. In simple words, This is the reduction of vibration or structure borne sound by the use of resilient materials inserted in the transmission path between source and receiver.

            There are two main methods for measurement of vibrations: The first one is “PPV (Part Particle Velocity)” which is Measured in m/s (meter/second). It is used to measure vibration transmission from source to other mediums. The second one is “VDV (Vibration Dosage Value)” which is measured in m/s^(-1.75) and is used to measure dosage value in context to humans."
            img1={Dampner_Sheet}
            imgt1="DAMPNER SHEET"
            img2={Isolator_Mount}
            imgt2="ISOLATOR MOUNT"
            img3={Vib_Curb_Sheet}
            imgt3="VIB CURB SHEET"
            img4={Vib_Wall_Ceiling_Curb_Hanger}
            imgt4="VIB WALL CEILING CURB HANGER"
            img5={Vibration_Hanger}
            imgt5="VIBRATION HANGER"
            img6={Wooden_Flooring}
            imgt6="WOODEN FLOORING"
        />
        <div className="footer_gap"/>
        <Footer/>
    </div>
  )
}
