import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import Eighteen_Degree_Lounge_Pune from "./Assets/lounge-pune.jpg" 
import Crystal_Lounge_and_Bar_Bikaneer from "./Assets/crystal-lounge.jpg"
import Hollywood_Club from "./Assets/hollywood-club.jpg"
import Lezzetli_Lounge_Bar_Chandigarh from "./Assets/lezzetli-club.jpg"
import Mumbai_Diso_Bar from "./Assets/mumbai-disco.jpg"
import Stain_Glass_Mumbai from "./Assets/stain-glass.jpg"
import Footer from '../../Homepage/Components/Footer/Footer'
import TempVib from '../../Prod_Cat/Vibration/TempVib'

export default function Disco() {
  return (
    <div>
        <Header/>
        <TempVib
            title="Disco's & Lounges"
            description="Like the banquets, discos and lounges are the places where people came to enjoy the ambience and the music. Discotheques and lounges are comparatively small as compare to the banquet halls. Utility of the discotheque is also different. In banquets where the people are more likely to enjoy the different activities like food, drinks, ambience, crowed etc. In discos the people came to enjoy the dance and party. To enjoy parties, loud music is the basic element present in thediscotheques. Night clubs are also form of discotheques, where people came to enjoy after the tiresome work of the entire day or on weekends.

            As the main emphasis is on dance and party in the discotheques or night clubs, the music is always loud and is full of low frequencies to thrive any of the person present in the disco. In this way the requirements of the discotheque are different from the banquet and has to be treated accordingly.
            
            Lounges are mostly operated with light music where people sit in a rest mode and enjoy light music so has to be acoustically designed accordingly."
            img1={Eighteen_Degree_Lounge_Pune}
            imgt1="18 Degree Lounge Pune"
            img2={Crystal_Lounge_and_Bar_Bikaneer}
            imgt2="Crystal Lounge and Bar Bikaneer"
            img3={Hollywood_Club}
            imgt3="Hollywood Club"
            img4={Lezzetli_Lounge_Bar_Chandigarh}
            imgt4="Lezzetli Lounge & Bar Chandigarh"
            img5={Mumbai_Diso_Bar}
            imgt5="Mumbai Diso & Bar"
            img6={Stain_Glass_Mumbai}
            imgt6="Stain Glass Mumbai"
        />
        <Footer/>
    </div>
  )
}
