import React , {useState , useEffect} from "react";
import refnum from "./refnum.mjs";
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link , Routes } from "react-router-dom";
let redirect_uri = "https://master.drdul8gu26jrd.amplifyapp.com/redirect";



function Compo1()
{
  const [client_id, setClientid] = useState(0);
  function setvalue(e)
    {
        setClientid(e.target.value);
   }
//this is the path
   const downloadFile = () => {
    fetch("https://master.drdul8gu26jrd.amplifyapp.com/public/files/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ms-excel',
      },
    })
    .then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `sample.xls`,
      );
  
      // Append to html link element page
      document.body.appendChild(link);
  
      // Start download
      link.click();
  
      // Clean up and remove the link
      link.parentNode.removeChild(link);
    });
 
 
    // window.location.href = "https://master.drdul8gu26jrd.amplifyapp.com/public/files/sample.xls"
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
<div>
  <button onClick={downloadFile}>Download xls</button>
  {/* <button href={require("https://master.drdul8gu26jrd.amplifyapp.com/public/files/sample.xls")} download="myFile">Download file</button> */}
  {/* <Link to="/files/sample.xls" target="_blank" download>Download</Link> */}
</div>
</div>
  );
}


export default Compo1;