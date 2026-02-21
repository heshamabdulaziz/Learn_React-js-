import { useState } from "react"
import Compenent_A from "./Compenent_A.JSX";

const ContextApiExample=()=>{
/*
we ues contextapi hook to share data data between commponent& prevent drilling 

*/
const [product,setprodect]=useState("laptop");
return(
<div>
<h2>parant component (ContextApiExample) {product}</h2>

<Compenent_A product={product}/>
</div>

    
)}

export default ContextApiExample