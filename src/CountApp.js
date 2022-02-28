import React, { useState } from "react";
import CountComponent from "./CountComponent";
import './App.css'
import Navbar from "./Navbar";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link , Routes } from "react-router-dom";
import Digilogin from "./Digilogin";
import Compo1 from "./Compo1.js";
import refnum from "./refnum.mjs";




export default  function CountApp() {

  return(
<>
  <Navbar></Navbar>
<Router >
       <Routes>
       <Route  path="/" element = {<Compo1/>}> </Route>
            <Route  path="/home" element = {<Compo1/>}> </Route>
            <Route  path="/about" element = {<About/>}> </Route>
            <Route path = {`/${refnum}`}  element={<Digilogin />}> </Route>
       </Routes>
 </Router>
</>
);

}

