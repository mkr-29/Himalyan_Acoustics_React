import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import AR_Rehman_Studio_Chennai from "./Assets/s1.jpg"
import Arunachal_Home_studio from "./Assets/s2.jpg"
import Byjus_Bangalore from "./Assets/s3.jpg"
import C_Dass_Studio_Faridabad from "./Assets/s4.jpg"
import Essel_Shyam_Studio from "./Assets/s5.jpg"
import Hearing_Aid_Centre_Siemens_Studio from "./Assets/s6.jpg"
import Hindustan_Times_Mumbai_Fever_fm from "./Assets/s7.jpg"
import Home_Studio_Pune from "./Assets/s8.jpg"
import Studio_Mirchi from "./Assets/s9.jpg"
import Recording_Studio_of_Ajit_Samachar_Jalandhar from "./Assets/s10.jpg"
import Footer from '../../Homepage/Components/Footer/Footer'
import TempStu from './TempStu'

export default function Studio() {
  return (
    <div>
        <Header/>
        <TempStu
            title="Studio"
            description="A recording studio is a place which is for the recording of sound and for the reproduction of that performance. For studios it is always desirable that these should be acoustically “dead”, which means a very low reverberation time is required in the studios. Studios specially needs proper soundproofing to avoid any kind of further issues. Not only absorption, but insulation is a basic requirement in the studios. Absorption is for the making speech clearer and insulation is for stopping the sound transmission from outside to inside and vice versa. This is very important to prevent transmission of low frequency sounds such as traffic noise, aircraft noise, etc. Normally, the walls in the recording studios are the double walls with the cavity infilled. A floating room is created inside the room to disconnect the entire structure from the existing structure and to prevent low frequency sounds. Low frequency sounds are having longer bandwidth and can cross most of the surfaces. This is very important to seal all the airgaps very carefully to prevent the sound leakages through the gaps which could lead the escape of sound to other places. This is always advisable to take the expert advice while designing the studios. Good and technical materials shall be used in the studios for the desired results.

            Usually cost is a very important factor which affects the designing of any studio. After deciding the cost, the next step is to achieve the desired results within that budget. Location or site for the studio also have to be chosen very carefully to avoid the unwanted sounds like traffic, aircraft or the people talking around etc. In case of making of a studio in an existing building, it is very important to disconnect the building structure from the studio structure. In case new structure has to be built, it should be as per the technical norms for the required for studios. Provision of Insulation to cut the external sounds and vibrations are very important to treat. The design of the Ceilings and the walls especially corners are very important to treat in any of the professional studio. Acoustic is very much dependent on the shape of the control room where studios just needs to sound good, control rooms shall be accurate and requires a low RT60. A good studio has the feature of different characteristics for different kind of recordings. For better eye contact the shape of the studio matters a lot. Stable view at the mix position makes the Control rooms best. Corners of the studios treated as diagonal for efficiency of space. Diagonal line have a longer dimension."
            img1={AR_Rehman_Studio_Chennai}
            imgt1="AR REHMAN STUDIO CHENNAI"
            img2={Arunachal_Home_studio}
            imgt2="ARUNACHAL HOME STUDIO"
            img3={Byjus_Bangalore}
            imgt3="BYJUS BANGALORE"
            img4={C_Dass_Studio_Faridabad}
            imgt4="C DASS STUDIO FARIDABAD"
            img5={Essel_Shyam_Studio}
            imgt5="ESSEL SHYAM STUDIO"
            img6={Hearing_Aid_Centre_Siemens_Studio}
            imgt6="HEARING AID CENTRE SIEMENS STUDIO"
            img7={Hindustan_Times_Mumbai_Fever_fm}
            imgt7="HINDUSTAN TIMES MUMBAI FEVER FM"
            img8={Home_Studio_Pune}
            imgt8="HOME STUDIO PUNE"
            img9={Studio_Mirchi}
            imgt9="STUDIO MIRCHI"
            img10={Recording_Studio_of_Ajit_Samachar_Jalandhar}
            imgt10="RECORDING STUDIO OF AJIT SAMACHAR JALANDHAR"
        />
        <Footer/>
    </div>
  )
}
