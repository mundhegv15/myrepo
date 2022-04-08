import React, { useState, useEffect } from "react";
import OneSignal from "react-onesignal";
import CountComponent from "./CountComponent";
import Navbar from "./Navbar";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Digilogin from "./Digilogin";
import Compo1 from "./Compo1.js";
import refnum from "../refnum.mjs";
import News from "./News";

export default function CountApp() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Compo1 />}></Route>
          <Route path="/home" element={<Compo1 />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/News"
            element={<News country="in" language="en" category="" />}
          ></Route>
          <Route
            path="/science"
            element={<News country="in" language="en" category="science" />}
          ></Route>
          <Route
            path="/sports"
            element={<News country="" language="en" category="sports" />}
          ></Route>
          <Route
            path="/health"
            element={<News country="in" language="en" category="health" />}
          ></Route>
          <Route
            path="/technology"
            element={<News country="in" language="en" category="technology" />}
          ></Route>
          <Route
            path="/general"
            element={<News country="in" language="en" category="general" />}
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News country="in" language="en" category="entertainment" />
            }
          ></Route>
          <Route
            path="/business"
            element={<News country="" language="en" category="business" />}
          ></Route>
          <Route path="/redirect" element={<Digilogin />}></Route>
        </Routes>
      </Router>
    </>
  );
}
// style={{window.innerWidth > 768 ? '800px' : '400px'}}
