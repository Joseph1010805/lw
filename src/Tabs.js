import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainStory from './MainStory';
import Map from './Map';
import Stats from './Stats';
import Inventory from './Inventory';
import HorizontalLayoutWithIFrame from "./testPane"

function Tabs() {
  return (
    <div>
   <div>hello</div>
   <Routes>
   <Route exact path = "/pane" element={<HorizontalLayoutWithIFrame />}/>
   <Route exact path = "/story" element={<MainStory />}/>
   <Route exact path = "/map" element={<Map />}/>
   <Route exact path = "/stats" element={<Stats />}/>
   <Route exact path = "/inventory" element={<Inventory />}/>
 </Routes>
 </div>
  )
}

export default Tabs
