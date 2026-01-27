import { useState } from "react";


export default function Form(){
    //const [name,setName]=useState("");
    //const [email,setEmail]=useState("");
     //const [text,setText]=useState("initial value");
     //const [isStudent,setisStudent]=useState(false);
      //const [country,setcountry]=useState("England ");
      // const [status,setStatus]=useState("");

        const [formInput,setformInput]=useState({
            name:'',
            email:'',
            text:'',
            isStudent:false,
            country:'',
            status:''

        });

    
     const handleTextarea=(e)=>{setformInput({...formInput,text:e.target.value})}
      const handleCheckbox=(e)=>{setformInput({...formInput,isStudent:e.target.checked})}
      const handleSelect=(e)=>{ setformInput({...formInput,country:e.target.value})
      }

    const handleSubmit=(e)=>{
       e.preventDefault();
   setformInput({

            name:formInput.name,
            email:formInput.email,
            text:formInput.text,
            isStudent:formInput.isStudent,
            country:formInput.country,
            status:formInput.status


           })
 alert(`Name:${formInput.name} \n  Email:${formInput.email} \n    INFO :${formInput.text}
    isStudent:${formInput.isStudent} \n  Country:${formInput.country} \n    Gender:${formInput.status}
    `);

    // prevent Default  reload using e.preventDefault()
    
console.log(`Name:${formInput.name}   Email:${formInput.email}     INFO :Email:${formInput.text}`);

}
 return(
<div>
<h2 style={{color:"red"}}>UseStateWheForms</h2>
<form onSubmit={handleSubmit}>
<label> Name: </label> 

<input type="text" value={formInput.name} onChange={(e)=>setformInput({...formInput,name:e.target.value})}></input>
<p>{formInput.name} </p>

<label htmlFor=""> Email: </label>
<input type="Email" value={formInput.email} onChange={(e)=>setformInput({...formInput,email:e.target.value})}></input>
<p>{formInput.email} </p>
<label htmlFor=""> Info: </label>
<textarea value={formInput.text} onChange={handleTextarea}> </textarea>
<p>{formInput.text} </p>
<label htmlFor=""> Are you student : </label>
<input type="checkbox" checked={formInput.isStudent}  onChange={handleCheckbox}/>
<p>{formInput.isStudent} </p>
<label htmlFor=""> Your Country: </label> 
<select value={formInput.country}  onChange={handleSelect}>
<option >Canada </option>
<option>china </option>
<option>England </option>
<option>yemen</option>
  
</select>
<p>{formInput.country} </p>
<label htmlFor=""> Gender: </label>  
Male:
<input type="radio" value="male" checked={formInput.status=="male"} onChange={(e)=>setformInput({...formInput,status:e.target.value})}/>
Famiale <input type="radio" value="femaile" checked={formInput.status=="femaile"} onChange={(e)=>setformInput({...formInput,status:e.target.value})}/>
<p>{formInput.status} </p>

<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>


</div>
 


 )


}