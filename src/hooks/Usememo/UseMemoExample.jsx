import { useState } from "react"

const UseMemoExample=()=>{
const colorArray = ["red", "blue", "green", "purple", "orange"];
/*
using Usememo to make  optamization like  stop mulitple rendering  component or any part in comp

strucure 

Usememo(fn,[dependences])
*/

const [count,setCount]=useState(0);
const [test,setTest]=useState(0);

return(
<div>

<div>
    Count = {count}
     <br></br>
   {console.log("Rendered")} 
     
</div>
 
<button onClick={()=>{setCount(count-1)}}>-</button>
<button onClick={()=>{setCount(count+1)}}>+</button>
<button onClick={()=>{setTest(test+1)}}>test</button>  test = {test}

</div>

)}

export  default UseMemoExample