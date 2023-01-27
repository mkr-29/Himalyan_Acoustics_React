import React from "react";
import "../Absorption/Absorption.css"
import Header from "../../Homepage/Components/Header/Header";
import Acoustic_Door from "./Assets/acoustic-door.jpg";
import Glass_Wooden_Acoustic_Door from "./Assets/glass-wooden.jpg";
import Aphony_Grace_Sound_Barrier_With_Dampner from "./Assets/aphony-grace.jpg";
import Aphony_Grace_Sound_Barrier from "./Assets/aphony-sound.jpg";
import ISO_Block from "./Assets/iso-block.jpg";
import ISO_Ply from "./Assets/ply.jpg";
import Sound_Barrier_With_Damper from "./Assets/sound-barrier-d.jpg";
import Sound_Barrier from "./Assets/sound-b.jpg";
import Sound_Dampner from "./Assets/sound-damper.jpg";
import Silent_Board from "./Assets/slient-b.jpg"
import ISO_Board from "./Assets/iso-board.jpg"
import Footer from "../../Homepage/Components/Footer/Footer";
import TempIns from "./TempIns";

export default function Insiso() {
  return (
    <div>
      <Header />
      <TempIns
        title="Insulation / Isolation"
        description="Sound Absorption is a technique where in various absorbent materials are strategically used to absorb sound to avoid unwanted reflected sound waves within a room or space. The main benefit of this technique is to reduce reverberation control as well as echo control within a space. There are two rating methods prominently used across the world. In simple words, it’s a process whereby sound energy is converted into heat, leading to reduction into sound pressure level (SPL). This is a property of the material, which allows it to absorb the sound energy.

The first one is STC (Sound Transmission Class) which is defined as part of American Standards and used across the world, majorly within United States. It is a single number rating measured in Decibels (dB).The Second one is STC RW (Sound Reduction Index) which is defined as part of ISO standards and majorly used outside the United States. Similar to STC, it is a single number rating measured in Decibels (dB)."
        img1={Acoustic_Door}
        imgt1="ACOUSTIC DOOR"
        img2={Glass_Wooden_Acoustic_Door}
        imgt2="GLASS WOODEN ACOUSTIC DOOR"
        img3={Aphony_Grace_Sound_Barrier_With_Dampner}
        imgt3="APHONY GRACE SOUND BARRIER WITH DAMPNER"
        img4={Aphony_Grace_Sound_Barrier}
        imgt4="APHONY GRACE SOUND BARRIER"
        img5={ISO_Block}
        imgt5="ISO BLOCK"
        img6={ISO_Ply}
        imgt6="ISO PLY"
        img7={Sound_Barrier_With_Damper}
        imgt7="SOUND BARRIER WITH DAMPER"
        img8={Sound_Barrier}
        imgt8="SOUND BARRIER"
        img9={Sound_Dampner}
        imgt9="SOUND DAMPNER"
        img10={Silent_Board}
        imgt10="SILENT BOARD"
        img11={ISO_Board}
        imgt11="ISO BOARD"
      />
      <div className="footer_gap"/>
      <Footer/>
    </div>
  );
}
