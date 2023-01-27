import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import Aligarh_University_Auditorium from "./Assets/aligarh-uni.jpg"
import Auditorium_Jaipur_Rawat_School from "./Assets/auditorium-rawat.jpg"
import Auditorium_Okhla from "./Assets/auditorium-okhla.jpg"
import BBMB_TALWARA_Hoshiarpur_Punjab from "./Assets/bbmb-talwara.jpg"
import Bhubneshwar_Orissa from "./Assets/bhubneshwar-orissa.jpg"
import Blue_Bird_School_Panchkulla from "./Assets/blue-bird.jpg"
import Delhi_Auditorium from "./Assets/delhi-auditorium.jpg"
import Dholera_Rajathan from "./Assets/dholera-rajathan.jpg"
import DRDO_Chandigarh from "./Assets/drdo-chandigarh.jpg"
import Father_Agnel_School_Vaishali_Ghaziabad_UP from "./Assets/father-agnel.jpg"
import Father_Agnel_School_Vaishali_Noida_UP from "./Assets/father-agnel-noida.jpg"
import GGDSD_College_Chandigarh_Sector_32 from "./Assets/gdsd-college.jpg"
import GKVK_Bangalore from "./Assets/gkvk-bangalore.jpg"
import Hindustan_Aeronautics_Limited from "./Assets/hindustan-aeronautics.jpg"
import Harsha_School_Bangalore from "./Assets/harsha-School.jpg"
import Kalaiarangam_Chennai from "./Assets/kalaiarangam-chennai.jpg"
import Kalyani_University_Auditorium from "./Assets/kalyani-university.jpg"
import Pitthoragarh_Auditorium from "./Assets/pitthoragarh-auditorium.jpg"
import Punjabi_University_Patiala from "./Assets/punjabi-university.jpg"
import Shri_Vani_Vidyashala_High_School_Bhoirwadi_Pune from "./Assets/shri-vani.jpg"
import "../../Prod_Cat/Absorption/Absorption.css"
import Footer from '../../Homepage/Components/Footer/Footer'
import TempAud from './TempAud'

export default function Auditorium() {
  return (
    <div>
        <Header/>
        <TempAud
            title="Auditorium"
            description="Acoustic is not a laymen’s job and it has to be handled with complete technicalities, otherwise the purpose of acoustic will always be defeated. Acousticians are the professionals who handles the site with care to give it proper treatment for the kind of sound which is required for any particular site. Every site is different from other site keeping in mind, it’s structure, area and many more reasons. Even the geographical area plays a vital role for differentiating the acoustic treatment of the site.

            Auditorium is a site which is meant for multiple kinds of activities. It could be used for speeches, functions, performances, live music, cultural events and most of the time movie projections too. So, while designing auditorium, we have to take care all these things in our mind and to design the auditorium in such a way that distribution of sound will be equal to the participant sitting in the front row and as well as the audience sitting in the last row. We also have to take care the stage differently as it is very important place from where most of the sounds will be played. Further, we also have to take care different kind of activities that has to be performed in the auditorium. So, we can say acoustic is a pure science and the result of calculations. Some of the auditoriums are for sports activities too. So, these has to be treated differently in comparison with the normal auditorium. Perfect acoustician means, perfection in understanding of scientific principles and mathematical calculations. In Himalyan Acoustics we follow the same strategy."
            img1={Aligarh_University_Auditorium}
            imgt1="ALIGARH UNIVERSITY AUDITORIUM"
            img2={Auditorium_Jaipur_Rawat_School}
            imgt2="AUDITORIUM JAIPUR RAWAT SCHOOL"
            img3={Auditorium_Okhla}
            imgt3="AUDITORIUM OKHLA"
            img4={BBMB_TALWARA_Hoshiarpur_Punjab}
            imgt4="BBMB TALWARA HOSHIARPUR PUNJAB"
            img5={Bhubneshwar_Orissa}
            imgt5="BHUBNESHWAR ORISSA"
            img6={Blue_Bird_School_Panchkulla}
            imgt6="BLUE BIRD SCHOOL PANCHKULLA"
            img7={Delhi_Auditorium}
            imgt7="DELHI AUDITORIUM"
            img8={Dholera_Rajathan}
            imgt8="DHOLERA RAJATHAN"
            img9={DRDO_Chandigarh}
            imgt9="DRDO CHANDIGARH"
            img10={Father_Agnel_School_Vaishali_Ghaziabad_UP}
            imgt10="FATHER AGNEL SCHOOL VAISHALI GHAZIABAD UP"
            img11={Father_Agnel_School_Vaishali_Noida_UP}
            imgt11="FATHER AGNEL SCHOOL VAISHALI NOIDA UP"
            img12={GGDSD_College_Chandigarh_Sector_32}
            imgt12="GGDSD COLLEGE CHANDIGARH SECTOR 32"
            img13={GKVK_Bangalore}
            imgt13="GKVK BANGALORE"
            img14={Hindustan_Aeronautics_Limited}
            imgt14="HINDUSTAN AERONAUTICS LIMITED"
            img15={Harsha_School_Bangalore}
            imgt15="HARSHA SCHOOL BANGALORE"
            img16={Kalaiarangam_Chennai}
            imgt16="KALAIARANGAM CHENNAI"
            img17={Kalyani_University_Auditorium}
            imgt17="KALYANI UNIVERSITY AUDITORIUM"
            img18={Pitthoragarh_Auditorium}
            imgt18="PITTHORAGARH AUDITORIUM"
            img19={Punjabi_University_Patiala}
            imgt19="PUNJABI UNIVERSITY PATIALA"
            img20={Shri_Vani_Vidyashala_High_School_Bhoirwadi_Pune}
            imgt20="SHRI VANI VIDYASHALA HIGH SCHOOL BHOIRWADI PUNE"
        />
        {/* <div className="footer_gap_app"/> */}
        <Footer/>
    </div>
  )
}
