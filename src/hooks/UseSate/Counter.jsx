import { useState } from "react"

export default function Counter(){
    const[counter,setCounter]=useState(0);
    
    return(
<>
<h3><b>Repeated State Updates in React</b></h3>

<p style={{fontSize:30}}>{counter}</p>
<button style={{backgroundColor:"gray",color:"white"}} onClick={()=>{
    setCounter(counter-1);
}} >-</button>
 <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{
    //
    setCounter(counter+1);
     setCounter(counter+1);
      setCounter(counter+1);
       setCounter(counter+1);
        setCounter(counter+1);

}
    
    
    
    }>+</button>

</>

    )
}
