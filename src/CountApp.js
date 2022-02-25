import React, { useState } from "react";
import CountComponent from "./CountComponent";
import './App.css'
import Navbar from "./Navbar";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link , Routes } from "react-router-dom";
import refnum from "./refnum.mjs";
let redirect_uri = "https://master.drdul8gu26jrd.amplifyapp.com/redirect";



export default  function CountApp() {

  const [client_id, setClientid] = useState(0);
    const [count, setCount] = useState(0);
    const [name, setname] = useState();
    const [aadhaar, setaadhaar] = useState();
    const [dob, setdob] = useState();

   const  handlenamechange = (e) => {
        setname(name);
    }
    function setvalue(e)
    {
        setClientid(e.target.value);
    
    }

return(
<>
<div> 
      <Navbar />
      <form>
      <label>
            Client Id :
            <input
              type={"text"}
              name="client_id"
              placeholder="Enter Client Id"
              onChange={setvalue}
            />
          </label>
        <label>
          Name :
          <input type={"text"} name="fullname" value={name} placeholder="Full name" />
        </label>
        <label>
          DOB :
          <input type={"text"} name="DOB" value={dob} placeholder="00/00/0000" />
        </label>
        <label>
          Address :
          <input type={"text"} name="address" placeholder="Address" />
        </label>
        <label>
          Aadhaar No :
          <input
            type={"text"}
            name="aadhaar"
            value={aadhaar}
            placeholder="0000-0000-0000"
          />
        </label>
 <button
            type="submit"
            name="digifetch"
            formAction="https://182.72.231.115:8001/Requester/authorize"
            // onClick={handleDigibtn}
          >
            Login with Digilocker
          </button>
          <input type={"hidden"} name="reference_id" value={refnum} />
          <input type={"hidden"} name="redirect_uri" value={redirect_uri} />        
</form>
<Router >
          <Routes>
            <Route  path="/about" element = {<About/>}> </Route>
            <Route path="/redirect"  element={<About /> }></Route>
          </Routes>
      </Router>


</div>
</>
);

}
