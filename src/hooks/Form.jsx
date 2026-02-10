import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup"

export default function Form(){
  const[users,setUsers]=useState([
        {id:1,name:"john",email:"hesham@gmail.com",text:"bbnshwss",isStudent:false, country:"CANADA" },
       
          ] )

const handlsubmit1=(values) => {
   // values.preventDefault()
    setUsers([...users,{...values,id:users.length()+1}])
       //alert(JSON.stringify(values, null,2));
       
}


    /* 
    referncs 
     1- https://youtu.be/zxZ5lT9lf2o?si=2DgHMDThnzTgO4qm   - youtube
     2-https://formik.org/docs/api/formik                  -doc
    3-https://formik.org/docs/guides/validation USING yup library for valitation
    
    */
   const SignupSchema = Yup.object({
   name: Yup.string().min(2, 'Too Short!') .max(50, 'Too Long!').required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
    text: Yup.string() .min(2, 'Too Short!') .max(200, 'Too Long!').required('Required'),
     isStudent:Yup.boolean().required("Choose one Required"),
     country:Yup.string().required("Choose country Required"),
     status:Yup.string().required("Choose your gander is Required"),
 });
   const formik = useFormik({
     initialValues: {
            name:'',
            email:'',
            text:'',
            isStudent:false,
            country:'',
            status:''
     },
     
      onSubmit:handlsubmit1,
    
validationSchema:SignupSchema
    
   });
   
     
 return(
<div>
<h2 style={{color:"red"}}>UseStateWheForms</h2>
<form onSubmit={formik.handleSubmit}>
<label> Name: </label> 

<input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
{
formik.errors.name && formik.touched.name &&<p style={{color:"red"}}><b>{formik.errors.name}</b></p> 
}


<label htmlFor=""> Email: </label>
<input type="Email" name="email" value={formik.values.email} onChange={formik.handleChange}
onBlur={formik.handleBlur} ></input>

 {
formik.errors.email && formik.touched.email &&<p style={{color:"red"}}><b>{formik.errors.email}</b></p> 
}

<label htmlFor=""> Info: </label>
<textarea value={formik.values.text} name="text" onChange={formik.handleChange} onBlur={formik.handleBlur}> </textarea>
{
formik.errors.text &&formik.touched.text &&<p style={{color:"red"}}><b>{formik.errors.text}</b></p> 
}

<label htmlFor=""> Are you student : </label>
<input type="checkbox" name="isStudent" checked={formik.isStudent} 
 onChange={formik.handleChange} onBlur={formik.handleBlur}/>

{
formik.errors.isStudent && formik.touched.isStudent && <p style={{color:"red"}}><b>{formik.errors.isStudent}</b></p> 
}

<label htmlFor=""> Your Country: </label> 
<select value={formik.values.country} name="country" onChange={formik.handleChange}>
<option >Canada </option>
<option>china </option>
<option>England </option>
<option>yemen</option>
  
</select>
{
formik.errors.country &&formik.touched.country && <p style={{color:"red"}}><b>{formik.errors.country}</b></p> 
}

<label htmlFor=""> Gender: </label>  
Male:
<input type="radio" value="male" name="status" checked={formik.values.status==="male"}
 onChange={formik.handleChange } onBlur={formik.handleBlur}/>
Famiale <input type="radio" name="status"  value="femaile" checked={formik.values.status=="femaile"} 
onChange={formik.handleChange } onBlur={formik.handleBlur}/>
{
formik.errors.status && formik.touched.status&&<p style={{color:"red"}}><b>{formik.errors.status}</b></p> 
}


<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>



<table style={{}}>
    <thead> <h3 style={{backgroundColor:"red",color:"white"}}>Rendering Lists using map  </h3></thead>
    <tr>
<th>UserName </th>
  <th>email </th> 
   <th>Country </th>               

    </tr>

{
    

users.map((u)=><tr key={u.id}>
 <td> {u.name }  </td> 
 <td>{u.email }   </td> 
 <td> {u.country } </td>   
  <td> <button className="btn" style={{backgroundColor:"green" ,color:"white"}}>Add</button> </td> 
   <td> <button className="btn" style={{backgroundColor:"blue" ,color:"white"}}>Update</button> </td> 
 <td> <button  className="btn" style={{backgroundColor:"red" ,color:"white"}}>Delete</button> </td>                 
 
  </tr>

)


}

</table>



</div>
 


 )  }