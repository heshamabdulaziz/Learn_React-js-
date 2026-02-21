import Compenent_B from "./Compenent_B"

const Compenent_A=(prop)=>{

return(
<div>
<h3>  Compenent A</h3>
<p> product is ={prop.product}</p>
<h3>pass  data Compenent A to Compenent B</h3>
<Compenent_B product={prop.product}/>

</div>

    
)}

export default Compenent_A