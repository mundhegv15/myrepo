import React , {useState , useEffect} from "react";
import refnum from "./refnum.mjs";
import './App.css'
let redirect_uri = `https://master.drdul8gu26jrd.amplifyapp.com/${refnum}`;



function Compo1()
{
  const [client_id, setClientid] = useState(0);
  function setvalue(e)
    {
        setClientid(e.target.value);
   }

 



     return (
    <div >
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