import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Digilogin(props)
{

    const params = useParams()
    const productId = params.id;
    const search = useLocation().search;
  const token = new URLSearchParams(search).get('access_token');
  const authcode = new URLSearchParams(search).get('authorization_code');
  const name = new URLSearchParams(search).get('name');

    // const query = props.location.search;
    return(
<>
<h1>Digi locker login success...!</h1>

<div>
Name : {name}
access_token :{token}
Authorization_code :{authcode}
</div>
</>
    );
  
}
