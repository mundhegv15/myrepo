

export default ({counts , dobcallback , namecallback, aadhaarcallback }) => {
  

const handlecount = () => {
    // callback(counts+1 );
}    
const handledata = () => {
    namecallback("Ganesh Mundhe");
    aadhaarcallback("1212 1212 1212");
    dobcallback("11/11/1999");

}



    return(
        <>
{/* <div>
<button  onClick = {handlecount}  >Increment</button>
</div>
<span></span> */}
<button  onClick= {handledata }>Get Deatils</button>
</>
    );


}
