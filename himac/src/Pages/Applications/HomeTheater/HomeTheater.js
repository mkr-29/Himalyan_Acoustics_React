import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import Bangalore_Home_Theatre from "./Assets/h1.jpg"
import Bangladesh_Home_Theatre from "./Assets/h2.jpg"
import Chittorgarh_home_theatre from "./Assets/h3.jpg"
import Home_Theatre_Bhatinda from "./Assets/h4.jpg"
import Home_Thatre_Jodhpur from "./Assets/h5.jpg"
import Home_Theatre_Nagpur from "./Assets/h6.jpg"
import Hyderabad_Home_Theatre from "./Assets/h7.jpg"
import Jam_Room_Bangalore from "./Assets/h8.jpg"
import JD_Garden_Home_Theatre_Bangalore from "./Assets/h9.jpg"
import Kharar_Home_Theatre from "./Assets/h10.jpg"
import Ludhiana_Home_Theatre from "./Assets/h11.jpg"
import Panchkula_Home_Theatre from "./Assets/h12.jpg"
import Footer from '../../Homepage/Components/Footer/Footer'
import TempHom from './TempHom'

export default function HomeTheater() {
  return (
    <div>
        <Header/>
        <TempHom
            title="Home Theater"
            description="Home Theater is an area where most of the people give the least attention on acoustics. This may be due to lack of awareness or due to any other reason. But this is simple truth that people make Home theaters for their personal enjoyment. They spend heavy amounts on the sound system and other equipment’s. They started operating the systems, but for many years they are unable to find the reason, why their home theater is not sounding well irrespective of expensive systems, screens and the shiny interiors. Even, if some people know about acoustics, they will try to spend more on systems and a residual money for acoustics. We can’t blame them, as they never know that spending huge amounts on sound systems and doing nothing for the acoustics is going to harm their ears only. They are going to harm the listening capabilities of their own and their loved ones. Along with the good sound system, if you want the best sound quality, room acoustic treatments are an absolute necessity. It’s almost impossible to get a perfect home theater room without having proper acoustics.

            The very important purpose of doing home theater acoustics is to prevent echoes within the space to make the speech clearer. This is also called reducing the RT60 inside the room. The lesser will be the RT60, better will be the speech clarity.
            
            Second important thing, which is primarily required in the Home Theaters is to stop the sound transmission travelling from the Home Theater to the other parts of the house and this could be achieved through proper insulation. Like other acoustic treatments, home theater treatment is also different as per site to site conditions. For example, an independent house requires different treatment, basement requires different, flats required different and so on. Finally, if you possess a good sound system in your home theater room and your room is not treated with proper acoustics. Believe us, it is just like making a mess in your home theater room. Acoustic is not cheap, but could be designed within the budget with proper technical reasoning."
            img1={Bangalore_Home_Theatre}
            imgt1="BANGALORE HOME THEATRE"
            img2={Bangladesh_Home_Theatre}
            imgt2="BANGLADESH HOME THEATRE"
            img3={Chittorgarh_home_theatre}
            imgt3="CHITTORGARH HOME THEATRE"
            img4={Home_Theatre_Bhatinda}
            imgt4="HOME THEATRE BHATINDA"
            img5={Home_Thatre_Jodhpur}
            imgt5="HOME THEATRE JODHPUR"
            img6={Home_Theatre_Nagpur}
            imgt6="HOME THEATRE NAGPUR"
            img7={Hyderabad_Home_Theatre}
            imgt7="HYDERABAD HOME THEATRE"
            img8={Jam_Room_Bangalore}
            imgt8="JAM ROOM BANGALORE"
            img9={JD_Garden_Home_Theatre_Bangalore}
            imgt9="JD GARDEN HOME THEATRE BANGALORE"
            img10={Kharar_Home_Theatre}
            imgt10="KHARAR HOME THEATRE"
            img11={Ludhiana_Home_Theatre}
            imgt11="LUDHIANA HOME THEATRE"
            img12={Panchkula_Home_Theatre}
            imgt12="LUDHIANA HOME THEATRE"
        />
        <Footer/>
    </div>
  )
}
