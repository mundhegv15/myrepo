import React, { useState } from "react";
import CountComponent from "./CountComponent";
import './App.css'
import Navbar from "./Navbar";

export default  function CountApp() {

    const [count, setCount] = useState(0);
    const [name, setname] = useState();
    const [aadhaar, setaadhaar] = useState();
    const [dob, setdob] = useState();

   const  handlenamechange = (e) => {
        setname(name);
    }

return(
<>
<div> 
      <Navbar />
      <form>
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
        
</form>
</div>
</>
);

}
