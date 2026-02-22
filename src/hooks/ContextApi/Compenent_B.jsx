
import Compenent_C from "./Compenent_C"
import { ProductContext } from "./Contextapi"

const Compenent_B=()=>{
/*
we ues contextapi hook to share data data between commponent& prevent drilling 

*/

return(
<div>
<h3>  Compenent B b </h3>

<p style={{color:"red"}}> product is {ProductContext} </p>  







<Compenent_C/>

</div>

    
)}

export default Compenent_B