
import Compenent_B from "./Compenent_B"
import { ProductContext } from "./Contextapi"


const Compenent_A=()=>{

return(
<div>
    
<h3> using context api in  Compenent A</h3>
<p> product is ={ProductContext}</p>
<h3>pass  data Compenent A to Compenent B</h3>
<Compenent_B />

</div>

    
)}

export default Compenent_A