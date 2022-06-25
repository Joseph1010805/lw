import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainStory from './MainStory';
import Map from './Map';
import Stats from './Stats';
import Inventory from './Inventory';
import Split from "react-split"



function Tabs() {
  return (
   <div>
<Split
    className="split"
>
    <div></div>
    <div></div>
</Split>
    <div>hell</div>
    </div>
//     <div>
//    <div>hello</div>
//    <Routes>
//    <Route exact path = "/story" element={<MainStory />}/>
//    <Route exact path = "/map" element={<Map />}/>
//    <Route exact path = "/stats" element={<Stats />}/>
//    <Route exact path = "/inventory" element={<Inventory />}/>
//  </Routes>
//  </div>
  )
}

export default Tabs
