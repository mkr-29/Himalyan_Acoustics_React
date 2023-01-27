import React from 'react'
import Footer from '../../Homepage/Components/Footer/Footer'
import Header from '../../Homepage/Components/Header/Header'
import Temp1 from '../../Prod_Cat/Diffusion/TempDif'
import TempVib from '../../Prod_Cat/Vibration/TempVib'
import African_Development_Bank_Annual_Meetings_Ahmedabad from "./Assets/african-development.jpg"
import Haryana_Town_and_Country_Planning_Sector_18A from "./Assets/haryana-town.jpg"
import Himalyan_Acoustics_Conference_Hall from "./Assets/himalyan-conference.jpg"
import UIET_University_Kurukeshetra from "./Assets/uiet-kurukshetra.jpg"
import United_Nation_Conference_SoundProof_Temporary_Structure_Mahatma_Mandir_Gandhi_Nagar_Gujarat from "./Assets/united-nation-soundproof.jpg"
import Zeon_conference_meeting_room from "./Assets/zeon-conference.jpg"
export default function Conference_Hall() {
  return (
    <div>
        <Header/>
        <TempVib
            title="Conference Halls"
            description="Conference halls are basically meant for the exchange of communication. Most of the time these communications are official and business related by nature and called serious communications. Keeping in mind the seriousness of the activitiesin the conference halls, these needs to be designed for the better speech clarity.Distributionof sound shall be absolute amongst all the members present in the conference hall. Because one missed instruction in the meeting is equal one lost business.

            A common element in the case of most of the conference halls is that the audio and video equipment’s are installed. Numerous times the walls are made of gypsum, plywood or glass partitions. All these kinds of combinations lead to the leakage of sound which could lead to the release of serious communications from conference halls to the staff and outsiders. The audio and video equipment’s along with the dimensions, occupants in the of the conference halls also play a major role while its acoustic treatment."
            img1={African_Development_Bank_Annual_Meetings_Ahmedabad}
            imgt1="AFRICAN DEVELOPMENT BANK ANNUAL MEETINGS AHMEDABAD"
            img2={Haryana_Town_and_Country_Planning_Sector_18A}
            imgt2="HARYANA TOWN AND COUNTRY PLANNING SECTOR 18A"
            img3={Himalyan_Acoustics_Conference_Hall}
            imgt3="HIMALYAN ACOUSTICS CONFERENCE HALL"
            img4={UIET_University_Kurukeshetra}
            imgt4="UIET UNIVERSITY KURUKESHETRA"
            img5={United_Nation_Conference_SoundProof_Temporary_Structure_Mahatma_Mandir_Gandhi_Nagar_Gujarat}
            imgt5="UNITED NATION CONFERENCE SOUNDPROOF TEMPORARY STRUCTURE MAHATMA MANDIR GANDHI NAGAR GUJARAT"
            img6={Zeon_conference_meeting_room}
            imgt6="ZEON CONFERENCE MEETING ROOM"
        />
        <Footer/>
    </div>
  )
}
