import { useState } from "react";


export default function Form(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
     const [text,setText]=useState("initial value");
     const [checkboxx,setcheckboxx]=useState(false);
    
     const handleTextarea=(e)=>{setText(e.target.value)}
      const handleCheckbox=(e)=>{setcheckboxx(e.target.checked)}

    const handleSubmit=(e)=>{
       e.preventDefault();

    // prevent Default  reload using e.preventDefault()
    
console.log(`Name:${name}   Email:${email}     INFO :Email:${text}`);

}
 return(
<div>
<h2 style={{color:"red"}}>UseStateWheForms</h2>
<form onSubmit={handleSubmit}>
<label> Name: </label> 

<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
<p>{name} </p>

<label htmlFor=""> Email: </label>
<input type="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
<p>{email} </p>
<label htmlFor=""> Info: </label>
<textarea value={text} onChange={handleTextarea}> </textarea>
<p>{text} </p>
<label htmlFor=""> Are you student : </label>
<input type="checkbox"  onChange={handleCheckbox}/>
<p>{checkboxx} </p>
<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>


</div>
 


 )


}