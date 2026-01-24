import { useState } from "react";

export default function Button(){
    
    const[text,setText]=useState("Start");
    const[textInput,settextInput]=useState("");

   // intail value can be  number or text or object ,..... 
const btn=()=>{
  setText("Stop");}
  // bind html input using useState
 function handleinput(e){

 settextInput(e.target.value)
//console.log(e);

 }

return(
  <div>
      <h2 style={{color:"red"}}>bind html input using useState </h2>
      <input type="text" value={textInput} onChange={handleinput}></input>
      <p>{textInput}</p>
    <h2 style={{color:"red"}}>useState hook in react </h2>
<button style={{backgroundColor:"green" ,color:"red", fontSize:"50px"}}
    onClick={()=>{btn()}}  >{text}</button>  


  </div>
  
)
}