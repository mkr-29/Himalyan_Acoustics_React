import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import "./Absorption.css";
import Wooden_Dots from "./Assets/wooden-dot.jpg";
import Aphony_Fibril from "./Assets/aphony-fib.jpg";
import Merino_Fabric from "./Assets/merino-fab.jpg";
import Merino from "./Assets/merin.jpg";
import Under_Deck_Insulation from "./Assets/underdeck.jpg";
import Aphony_Fibrette_Baffles from "./Assets/aphony-fibrette.jpg";
import Aphony_Fibrette_Clouds from "./Assets/aphony-clouds.jpg";
import Aphony_Gloss_Baffle from "./Assets/aphony-baffle.jpg";
import Footer from "../../Homepage/Components/Footer/Footer";
import Aphony_Gloss_Clouds from "./Assets/aphony-glass-clouds.jpg";
import Carpet from "./Assets/Carpets.jpg";
import Aphony_Smart_Panel_22_Room_Kit from "./Assets/smart-panel.jpg";
import Portable_Vocal_booth from "./Assets/portable-booth.jpg";
import Infra_Board from "./Assets/infra-boad.jpg";
import Absorb_Wool from "./Assets/Absorb.jpg";
import WOODLOT from "./Assets/woodlot.jpg";
import ELEGANT_CREATIVE from "./Assets/elegant-creative.jpg";
import Elegant_Pasteable from "./Assets/elegant-pastable.jpg";
import Elegant_Fabric from "./Assets/elegant-fab.jpg";
import Stretch_Crepe from "./Assets/stretch.jpg";
import Elegant_Tile from "./Assets/e-tile.jpg";
import Aphony_Grace from "./Assets/aphony-gr.jpg";
import Aphony_Gloss from "./Assets/aphony-glos.jpg";
import Aphony_Fibrette from "./Assets/himalyan-ceiling.jpg";
import Aphony_Cortex_Splendor from "./Assets/himalyan-ceiling.jpg";
import TempAbs from "./TempAbs";

export default function Absorption() {
  return (
    <div>
      <Header />
      <TempAbs
        title="Absorption"
        description="Sound Absorption is a technique where in various absorbent materials are strategically used to absorb sound to avoid unwanted reflected sound waves within a room or space. The main benefit of this technique is to reduce reverberation control as well as echo control within a space. There are two rating methods prominently used across the world. In simple words, it’s a process whereby sound energy is converted into heat, leading to reduction into sound pressure level (SPL). This is a property of the material, which allows it to absorb the sound energy.

            The first one is NRC (Noise Reduction Coefficient) which is defined as part of America Standards and majorly used within United State. The rating is unitless and since it is a coefficient, it ranges from 0 to 1. The Second one Weighted Absorption Coefficient which is denoted by Greek letter ‘α’. and defined as part of ISO Standards and used prominently across the world. Similar to NRC, the rating is unitless, and ranges from 0 to 1."
        img1={Wooden_Dots}
        imgt1="WOODEN DOTS"
        img2={Aphony_Fibril}
        imgt2="APHONY FIBRIL"
        img3={Merino_Fabric}
        imgt3="MERINO FABRIC"
        img4={Merino}
        imgt4="MERINO"
        img5={Under_Deck_Insulation}
        imgt5="UNDER DECK INSULATION"
        img6={Aphony_Fibrette_Baffles}
        imgt6="APHONY FIBRETTE BAFFLES"
        img7={Aphony_Fibrette_Clouds}
        imgt7="APHONY FIBRETTE CLOUDS"
        img8={Aphony_Gloss_Baffle}
        imgt8="APHONY GLOSS BAFFLE"
        img9={Aphony_Gloss_Clouds}
        imgt9="APHONY GLOSS CLOUDS"
        img10={Carpet}
        imgt10="CARPET"
        img11={Aphony_Smart_Panel_22_Room_Kit}
        imgt11="APHONY SMART PANEL 22 ROOM KIT"
        img12={Portable_Vocal_booth}
        imgt12="PORTABLE VOCAL BOOTH"
        img13={Infra_Board}
        imgt13="INFRA BOARD"
        img14={Absorb_Wool}
        imgt14="ABSORB WOOL"
        img15={WOODLOT}
        imgt15="WOODLOT"
        img16={ELEGANT_CREATIVE}
        imgt16="ELEGANT CREATIVE"
        img17={Elegant_Pasteable}
        imgt17="ELEGANT PASTEABLE"
        img18={Elegant_Fabric}
        imgt18="ELEGANT FABRIC"
        img19={Stretch_Crepe}
        imgt19="STRETCH CREPE"
        img20={Elegant_Tile}
        imgt20="ELEGANT TILE"
        img21={Aphony_Grace}
        imgt21="APHONY GRACE"
        img22={Aphony_Gloss}
        imgt22="APHONY GLOSS"
        img23={Aphony_Fibrette}
        imgt23="APHONY FIBRETTE"
        img24={Aphony_Cortex_Splendor}
        imgt24="APHONY CORTEX SPLENDOR"
      />
      <div className="footer_gap"/>
      <Footer/>
    </div>
  );
}
