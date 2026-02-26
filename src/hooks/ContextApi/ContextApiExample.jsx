import Compenent_A from "./Compenent_A.JSX"
import { ProductContext } from "./Contextapi"

const ContextApiExample=()=>{
/*
we ues contextapi hook to share data data between commponent& prevent drilling 

*/


return(
<div>

<h2>parant component (ContextApiExampledd) {ProductContext}</h2>


<Compenent_A/>

</div>

    
)}

export default ContextApiExample