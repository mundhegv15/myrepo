import React, { useState } from "react";
import CountComponent from "./CountComponent";
import './App.css'

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
    {/* <h1>count:{count}
   
    </h1>
    <span></span>
    <label>name:</label>
    <input type={"text"} value = {name} onChange = {handlenamechange} placeholder = {"child will set name..!"} ></input> */}
 <form className="Form">
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