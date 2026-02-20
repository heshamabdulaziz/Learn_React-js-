import { useMemo, useState } from "react"

const UseMemoExample=()=>{
const randomColor ="#"+ Math.floor(Math.random()*16777215).toString();
/*
using Usememo to make  optamization like  stop mulitple rendering  component or any part in comp

strucure 

Usememo(fn,[dependences])
*/

const [count,setCount]=useState(0);
const [test,setTest]=useState(0);

const usmemo_result=useMemo(()=>{
    return(
<div style={{color:randomColor}}>
    Count = {count}
     <br></br>
   {console.log("Rendered")} 
     
</div>
    )
},[count])

return(
<div>

{usmemo_result}

 
<button onClick={()=>{setCount(count-1)}}>-</button>
<button onClick={()=>{setCount(count+1)}}>+</button>
<button onClick={()=>{setTest(test+1)}}>test</button>  test = {test}

</div>

)}

export  default UseMemoExample