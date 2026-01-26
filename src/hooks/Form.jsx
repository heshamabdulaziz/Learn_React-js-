import { useState } from "react";


export default function Form(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
     const [text,setText]=useState("");
    //<label htmlFor=""> Email: {email}</label>
//<input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
const handleSubmit=(e)=>{
    e.preventDefault();

    // prevent Default  reload using e.preventDefault()
    
console.log(`Name:${name}   Email:${email}`);

}
 return(
<div>
<h2 style={{color:"red"}}>UseStateWheForms</h2>
<form onSubmit={handleSubmit}>
<label> Name: </label> 

<input type="text" onChange={(e)=>setName(e.target.value)}></input>
<p>{name} </p>

<label htmlFor=""> Email: </label>
<input type="Email" onChange={(e)=>setEmail(e.target.value)}></input>
<p>{email} </p>
<label htmlFor=""> Info: </label>
<textarea onChange={(e)=>setText(e.target.value)}> </textarea>
<p>{text} </p>
<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>


</div>
 


 )


}