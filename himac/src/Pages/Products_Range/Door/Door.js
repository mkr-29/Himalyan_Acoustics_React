import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import TempDoo from './TempDoo'
import ACOUSTIC_DOOR from "./Assets/Do1.jpg"
import GLASS_WOODEN_ACOUSTIC_DOOR from "./Assets/Do2.jpg"

export default function Door() {
  return (
    <div>
        <Header/>
        <TempDoo
            title="Door"
            description="Acoustic wooden doors are extremely high-performance sound reducing doors and are specially manufactured for the spaces where high insulation is required. Studios, Multiplexes, Banquet halls, Hotel Rooms, Meeting Rooms, Board Rooms are some of the examples where these high-performance acoustic doors are installed due to the simple reason all these spaces need proper sound insulation. But, today, with the increased noise pollution i.e. traffic sounds, children’s sound from school, excessive sounds coming from park, aircraft sound etc. normal household people also started use of these high-performance acoustic doors. These acoustic doors are different from the normal doors and designed specially to prevent any kind of sound leakages. The properties of these Acoustic Doors are measured in STC (Sound Transmission Class) which is its capacity to block the sound. The STC value of the different doors varies as per its manufacturing process. Higher the STC, better will be the performance of the door. Proper installation is the key to success for such kind of doors. Good doors, if not installed properly could refrain from providing the desired results. These doors are used wherever high sound reduction performance is required between noise sensitive areas. These high-performance acoustic wooden doors solve the problems of noise transfer. Acoustic seals are used to ensure consistent and effective sound-proofing"
            img1={ACOUSTIC_DOOR}
            imgt1="ACOUSTIC DOOR"
            img2={GLASS_WOODEN_ACOUSTIC_DOOR}
            imgt2="GLASS WOODEN ACOUSTIC DOOR"
        />
        <Footer/>
    </div>
  )
}
