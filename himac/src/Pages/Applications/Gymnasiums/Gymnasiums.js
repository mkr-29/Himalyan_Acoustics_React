import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import TempVib from '../../Prod_Cat/Vibration/TempVib'
import Bahadurgarh_with_13_Badminton_Courts from "./Assets/g1.jpg" 
import Dhanbad_Sports_Hall from "./Assets/g2.jpg"
import Eden_Court_games_room from "./Assets/g3.jpg"
import GOKULDHAM_SURAT from "./Assets/g4.jpg"
import Kolhapur_Gym from "./Assets/g5.jpg"
import Nauni_University_Solan from "./Assets/g6.jpg"

export default function Gymnasiums() {
  return (
    <div>
        <Header/>
        <TempVib
            title="Gymnasiums"
            description="Gymnasiums are the multi-use spaces and are used forsporting events.These are also called sports auditoriums and sometimes could be used for speeches, addresses, concerts etc.Sports auditoriums with stage setup could be used for musical events, plays, and other events.

            The common problem in such type of halls is the “reverberations” and that is due to its large size and the height. Most of the time there are trusses on the top of such gymnasiums and the owners doesn’t want to do anything with the truss and want to use it for the lighting purposes. Another problem is the “The HVAC (heating, ventilation, and air-conditioning) which acts too loud while in operation. So, while using a sound equipment’s they end up with a loud and unintelligible speech. During any kind of sports events these kinds of gymnasiums reacts with a very bad reverberation time resulting a loud sound reflecting from surface to surface. All these acoustic issues are very common and could be dealt with the technical applications of the right kind of acoustic products. Acoustic is costly, but every-time you don’t find it costly. A good acoustician could give you desired results within your budget too. The only thing is the correct application at the right place and in Himalyan Acoustic we do the same."
            img1={Bahadurgarh_with_13_Badminton_Courts}
            imgt1="BAHADURGARH WITH 13 BADMINTON COURTS"
            img2={Dhanbad_Sports_Hall}
            imgt2="DHANBAD SPORTS HALL"
            img3={Eden_Court_games_room}
            imgt3="EDEN COURT GAMES ROOM"
            img4={GOKULDHAM_SURAT}
            imgt4="GOKULDHAM SURAT"
            img5={Kolhapur_Gym}
            imgt5="KOLHAPUR GYM"
            img6={Nauni_University_Solan}
            imgt6="NAUNI UNIVERSITY SOLAN"
        />
        <Footer/>
    </div>
  )
}
