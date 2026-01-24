import { useState } from "react";

export default function Button(){
    const[text,setText]=useState("Start");
   
const btn=()=>{
  setText("Stop");



}
return(
  <button style={{backgroundColor:"green" ,color:"red", fontSize:"50px"}}
    onClick={()=>{btn()}}  >{text}</button>  
)

}