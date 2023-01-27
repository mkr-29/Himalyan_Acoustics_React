import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auditorium from './Pages/Applications/Auditorium/Auditorium';
import BanquetHall from './Pages/Applications/Banquet_Hall/BanquetHall';
import Conference_Hall from './Pages/Applications/Conference_Hall/Conference_Hall';
import Disco from './Pages/Applications/Disco/Disco';
import Gymnasiums from './Pages/Applications/Gymnasiums/Gymnasiums';
import HomeTheater from './Pages/Applications/HomeTheater/HomeTheater';
import Multipurpose from './Pages/Applications/Multipurpose/Multipurpose';
import Office from './Pages/Applications/Office/Office';
import Studio from './Pages/Applications/Studio/Studio';
import Worship from './Pages/Applications/Worship/Worship';
import Dropdown from './Pages/Homepage/Components/Header/Dropdown';
import Homepage from './Pages/Homepage/Homepage';
import Ceilings from './Pages/Products_Range/Ceilings/Ceilings';
import Absorption from './Pages/Prod_Cat/Absorption/Absorption';
import Diffusion from './Pages/Prod_Cat/Diffusion/Diffusion';
import Insiso from './Pages/Prod_Cat/InsIso/Insiso';
import Vibration from './Pages/Prod_Cat/Vibration/Vibration';
import Quicklinks from './Pages/Quicklinks/Quicklinks';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="absorption" element={<Absorption />} />
          <Route path="insiso" element={<Insiso />} />
          <Route path="vibration" element={<Vibration />} />
          <Route path="diffusion" element={<Diffusion />} />
          <Route path="auditorium" element={<Auditorium />} />
          <Route path="banquet_hall" element={<BanquetHall />} />
          <Route path="conference_hall" element={<Conference_Hall />} />
          <Route path="disco" element={<Disco />} />
          <Route path="gymnasiums" element={<Gymnasiums />} />
          <Route path="homethea" element={<HomeTheater />} />
          <Route path="multipurpose" element={<Multipurpose />} />
          <Route path="office" element={<Office />} />
          <Route path="studio" element={<Studio />} />
          <Route path="worship" element={<Worship />} />
          <Route path="ceilings" element={<Ceilings />} />
          <Route path="quicklinks" element={<Quicklinks />} />
          <Route path="dropdown" element={<Dropdown />} />
      </Routes>
    </BrowserRouter>
  )
}
