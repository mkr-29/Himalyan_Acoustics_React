import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import TempVib from '../../Prod_Cat/Vibration/TempVib'
import Bangalore_office from "./Assets/o1.jpg"
import Airtel_Head_Office_Gurgaon from "./Assets/o2.jpg"
import Bihar_Agricultural_University_Bhagalpur from "./Assets/o3.jpg"
import Hialyan_Acoustics_Marketing_Office from "./Assets/o4.jpg"
import Office_Jodhpur from "./Assets/o5.jpg"
import OSTRO_Delhi_Gurgaon_Office from "./Assets/o6.jpg"


export default function Office() {
  return (
    <div>
        <Header/>
        <TempVib
            title="Office"
            description=""
            img1={Bangalore_office}
            imgt1="BANGALORE OFFICE"
            img2={Airtel_Head_Office_Gurgaon}
            imgt2="AIRTEL HEAD OFFICE GURGAON"
            img3={Bihar_Agricultural_University_Bhagalpur}
            imgt3="BIHAR AGRICULTURAL UNIVERSITY BHAGALPUR"
            img4={Hialyan_Acoustics_Marketing_Office}
            imgt4="HIALYAN ACOUSTICS MARKETING OFFICE"
            img5={Office_Jodhpur}
            imgt5="OFFICE JODHPUR"
            img6={OSTRO_Delhi_Gurgaon_Office}
            imgt6="OSTRO DELHI GURGAON OFFICE"
        />
        <Footer/>
    </div>
  )
}
