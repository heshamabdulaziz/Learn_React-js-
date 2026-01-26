import { useState } from "react";


export default function Form(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
     const [text,setText]=useState("initial value");
     const [isStudent,setisStudent]=useState(false);
      const [country,setcountry]=useState("England ");
       const [status,setStatus]=useState("");

    
     const handleTextarea=(e)=>{setText(e.target.value)}
      const handleCheckbox=(e)=>{setisStudent(e.target.checked)}
      const handleSelect=(e)=>{setcountry(e.target.value)}

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
<input type="checkbox" checked={isStudent}  onChange={handleCheckbox}/>
<p>{isStudent} </p>
<label htmlFor=""> Your Country: </label> 
<select value={country}  onChange={handleSelect}>
<option >Canada </option>
<option>china </option>
<option>England </option>
<option>yemen</option>
  
</select>
<p>{country} </p>
<label htmlFor=""> Gender: </label>  
Male:
<input type="radio" value="male" checked={status=="male"} onChange={(e)=>setStatus(e.target.value)}/>
Famiale <input type="radio" value="femaile" checked={status=="femaile"} onChange={(e)=>setStatus(e.target.value)}/>
<p>{status} </p>

<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>


</div>
 


 )


}