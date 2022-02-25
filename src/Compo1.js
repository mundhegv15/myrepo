import React , {useState} from "react";
import refnum from "./refnum.mjs";
let redirect_uri = "https://master.drdul8gu26jrd.amplifyapp.com/redirect";
function Compo1()
{
  const [client_id, setClientid] = useState(0);
  function setvalue(e)
    {
        setClientid(e.target.value);
   }
     return (
    <div>
    <form>
    
      <label>
        Name :
        <input type={"text"} name="fullname" placeholder="Full name" />
      </label>
      <label>
        DOB :
        <input type={"text"} name="DOB" placeholder="00/00/0000" />
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
          placeholder="0000-0000-0000"
        />
      </label>
<br>
</br>
      <label>
          Client Id :
          <input
            type={"text"}
            name="client_id"
            placeholder="Enter Client Id"
            onChange={setvalue}
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
</div>
  );
}


export default Compo1;