import Compenent_C from "./Compenent_C"

const Compenent_B=({product})=>{
/*
we ues contextapi hook to share data data between commponent& prevent drilling 

*/

return(
<div>
<h3>  Compenent B</h3>
<p style={{color:"red"}}> product is ={product}</p>
<h3>pass  data Compenent B to Compenent C</h3>

<Compenent_C product={product}/>

</div>

    
)}

export default Compenent_B