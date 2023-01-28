import React from "react";
import "../Absorption/Absorption.css"
import Header from "../../Homepage/Components/Header/Header";
import AcousticDoor from "./Assets/AcousticDoor.jpg";
import GlassWoodenAcousticDoor from "./Assets/GlassWooden.jpg";
import AphonyGraceSoundBarrierWithDampner from "./Assets/AphonyGrace.jpg";
import AphonyGraceSoundBarrier from "./Assets/AphonySound.jpg";
import ISOBlock from "./Assets/IsoBlock.jpg";
import ISOPly from "./Assets/Ply.jpg";
import SoundBarrierWithDamper from "./Assets/SoundBarrierD.jpg";
import SoundBarrier from "./Assets/SoundB.jpg";
import SoundDampner from "./Assets/SoundDamper.jpg";
import SilentBoard from "./Assets/SlientB.jpg"
import ISOBoard from "./Assets/IsoBoard.jpg"
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
        img1={AcousticDoor}
        imgt1="ACOUSTIC DOOR"
        alt1="Acoustic Door"

        img2={GlassWoodenAcousticDoor}
        imgt2="GLASS WOODEN ACOUSTIC DOOR"
        alt2="Glass Wooden Acoustic Door"

        img3={AphonyGraceSoundBarrierWithDampner}
        imgt3="APHONY GRACE SOUND BARRIER WITH DAMPNER"
        alt3="Aphony Grace Sound Barrier With Dampner"

        img4={AphonyGraceSoundBarrier}
        imgt4="APHONY GRACE SOUND BARRIER"
        alt4="Aphony Grace Sound Barrier"

        img5={ISOBlock}
        imgt5="ISO BLOCK"
        alt5="ISO Block"

        img6={ISOPly}
        imgt6="ISO PLY"
        alt6="ISO Ply"

        img7={SoundBarrierWithDamper}
        imgt7="SOUND BARRIER WITH DAMPER"
        alt7="Sound Barrier With Damper"

        img8={SoundBarrier}
        imgt8="SOUND BARRIER"
        alt8="Sound Barrier"

        img9={SoundDampner}
        imgt9="SOUND DAMPNER"
        alt9="Sound Dampner"

        img10={SilentBoard}
        imgt10="SILENT BOARD"
        alt10="Silent Board"

        img11={ISOBoard}
        imgt11="ISO BOARD"
        alt11="ISO Board"
      />
      <div className="footergap"/>
      <Footer/>
    </div>
  );
}
