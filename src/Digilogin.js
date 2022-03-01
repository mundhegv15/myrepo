import React , {useState , useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css'

export default function Digilogin(props)
{

const [para , setparametr] = useState()

    const params = useParams()
    const productId = params.id;
    const search = useLocation().search;
  const token = new URLSearchParams(search).get('access_token');
   const authcode = new URLSearchParams(search).get('authorization_code');
   const name = new URLSearchParams(search).get('name');
   const rtoken = new URLSearchParams(search).get('refresh_token');
   const exptime = new URLSearchParams(search).get('expires_in');
   

function handleshow(){
   
setparametr(<p>
    <h3>Name : {name}</h3>
  <h3>Access_token  :{token}</h3>
  <h3>Authorization_code : {authcode}</h3>
  <h3>Refresh token : {rtoken}</h3>
  <h3>Expires in : {exptime}</h3>
  </p>);
}   
   return(
<>
<h1>Digi locker login success...!</h1>
<button onClick={handleshow}>ShowData</button>

<div>{para}</div>
</>
    );
  
}
