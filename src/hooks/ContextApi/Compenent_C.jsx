import { useContext } from "react"
import { ProductContext } from "./Contextapi"


const Compenent_C=()=>{
    
    const product=useContext(ProductContext)
/*
we ues contextapi hook to share data data between commponent& prevent drilling 

*/

return(
<div>
<h3>  Compenent C</h3>
<p style={{color:"green"}}> product is ={product}</p>

</div>

    
)}

export default Compenent_C