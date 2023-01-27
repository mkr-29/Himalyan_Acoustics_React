import React from 'react'
import TempStu from '../../Applications/Studio/TempStu'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import ISO_Block from "./Assets/Fl1.jpg"
import ISO_Ply from "./Assets/Fl2.jpg"
import Sound_Dampner from "./Assets/Fl3.jpg"
import Silent_Board from "./Assets/Fl4.jpg"
import ISO_Board from "./Assets/Fl5.jpg"
import Dampner_Sheet from "./Assets/Fl6.jpg"
import Isolator_Mount from "./Assets/Fl7.jpg"
import Vib_Curb_Sheet from "./Assets/Fl8.jpg"
import Wooden_Flooring from "./Assets/Fl9.jpg"
import Carpet from "./Assets/Fl10.jpg"

export default function Floor() {
  return (
    <div>
        <Header/>
        <TempStu
            title="Floor"
            description="The sound transmission from the ceiling and floor is very common now a days. This is a very common problem in the multistory building. Every person who is living in a multistory building would have come across the problem of the sound transmission from the floor of the family residing on the upper story. The sounds like footsteps, dragging of furniture, and other sounds like dropping something heavy are very normal the person living on below floor is forced to hear. These sounds are called Impact noise which travels freely through the air and the ceiling below. Impact noise is also known as footfall noise. As the name implies, this noise is produced from the impact of an object on the floor. Examples are Naturally, impact noise affects the person living below the floor more than it would affect the person living on the same floor. Floors are not only the source for sound transmission, but these are rich source for the vibrations also. The sound played in the home theater room of a family residing at the upper floor will definitely create vibrations which will travel to the lower floor through its floor as the entire structure is interconnected. This transmission is also called the structural transmissions. To reduce floor noise in residential or commercial buildings, good soundproofing materials helps a lot. Higher the STC (Sound Transmission Class), better will be the results. Application of soundproof sub-floors on the main floor significantly decreases sound transmission from one space to another.

            Good noise-reducing quality sound proofing products are required to achieve the desired sound insulation in floors. The soundproofing materials shall be of higher density as the weight of the soundproofing material used on the floor plays an important role. Some people often try carpets to stop sound transmissions to the lower floors which is not the correct option the carpets may absorb the sound floor, but here the requirement is of insulation which means the blocking of sound which carpet never does.
            
            As a manufacturer of the Acoustic materials, we are manufacturing the most technical products which could give you better sound insulation along with the vibration controls. These products are available in different styles and thicknesses. Manufactured from the green materials, these products are easy to install and suitable for use under or above the normal floor or carpet. All these products are conforming to National and Internal Standards and tested by reputed laboratories, which guarantees its performance."
            img1={ISO_Block}
            imgt1="ISO BLOCK"
            img2={ISO_Ply}
            imgt2="ISO PLY"
            img3={Sound_Dampner}
            imgt3="SOUND DAMPNER"
            img4={Silent_Board}
            imgt4="SILENT BOARD"
            img5={ISO_Board}
            imgt5="ISO BOARD"
            img6={Dampner_Sheet}
            imgt6="DAMPNER SHEET"
            img7={Isolator_Mount}
            imgt7="ISOLATOR MOUNT"
            img8={Vib_Curb_Sheet}
            imgt8="VIB CURB SHEET"
            img9={Wooden_Flooring}
            imgt9="WOODEN FLOORING"
            img10={Carpet}
            imgt10="CARPET"
        />
        <Footer/>
    </div>
  )
}
