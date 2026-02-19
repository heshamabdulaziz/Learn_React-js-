import { useEffect, useRef, useState } from "react"

const UseEffectExample=()=>{
const [count,setcount]=useState(0);
const  valuinput=useRef(0);
/*there are three ways to render useEffect
1- every rendering 
2-first rendering (onmount)
3-condition base
*/

useEffect(()=>{
console.log("every rendering of the component");

})

useEffect(()=>{
console.log("First rendering ");

},[])

useEffect(()=>{
console.log("condition base");

},[count])


useEffect(()=>{

console.log("hello from useEffect"+ " COUNT change to ="+count);
console.log("inputValue changed to ="+valuinput.current.value);



},[count,valuinput])

    return(

<div>
<h2>UseEffect   Example </h2>
<input type="text" value={count} ref={valuinput}/>
<button onClick={()=>setcount(count+1)}>click</button>

</div>

   )

}
 export default UseEffectExample