import React, { useState , useEffect} from "react";
import OneSignal from 'react-onesignal';
import CountComponent from "./CountComponent";
import './App.css'
import Navbar from "./Navbar";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link , Routes } from "react-router-dom";
import Digilogin from "./Digilogin";
import Compo1 from "./Compo1.js";
import refnum from "./refnum.mjs";





export default  function CountApp() {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  useEffect(() => {
    OneSignal.init({
      appId: "07b18ff8-7c5b-4dbc-a2c2-e6d4a974cee3"
    });
  }, []);

  return(
<>
  <Navbar></Navbar>
  {matches && (<h1>Big Screen</h1>)}
      {!matches && (<h3>Small Screen</h3>)}
<Router >
       <Routes>
       <Route  path="/" element = {<Compo1/>}> </Route>
            <Route  path="/home" element = {<Compo1/>}> </Route>
            <Route  path="/about" element = {<About/>}> </Route>
            <Route path = "/*"  element={<Digilogin />}> </Route>
       </Routes>
 </Router>
</>
);

}
// style={{window.innerWidth > 768 ? '800px' : '400px'}}
