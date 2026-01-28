import { useFormik } from "formik";

export default function Form(){
    
   const formik = useFormik({
     initialValues: {
            name:'',
            email:'',
            text:'',
            isStudent:false,
            country:'',
            status:''
     },
     onSubmit: (values) => {
       console.log(values);
       
     },
   });
   
     
 return(
<div>
<h2 style={{color:"red"}}>UseStateWheForms</h2>
<form onSubmit={formik.handleSubmit}>
<label> Name: </label> 

<input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
<p>{formik.values.name} </p>

<label htmlFor=""> Email: </label>
<input type="Email" name="email" value={formik.values.email} onChange={formik.handleChange}
onBlur={formik.handleBlur} ></input>
<p>{formik.values.email} </p>
<label htmlFor=""> Info: </label>
<textarea value={formik.values.text} onChange={formik.handleChange} onBlur={formik.handleBlur}> </textarea>
<p>{formik.values.text} </p>
<label htmlFor=""> Are you student : </label>
<input type="checkbox" checked={formik.isStudent}  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
<p>{formik.values.isStudent} </p>
<label htmlFor=""> Your Country: </label> 
<select value={formik.values.country}  onChange={formik.handleChange} onBlur={formik.handleBlur}>
<option >Canada </option>
<option>china </option>
<option>England </option>
<option>yemen</option>
  
</select>
<p>{formik.values.country} </p>
<label htmlFor=""> Gender: </label>  
Male:
<input type="radio" value="male" checked={formik.values.status=="male"}
 onChange={formik.handleChange }/>
Famiale <input type="radio" value="femaile" checked={formik.values.status=="femaile"} 
onChange={formik.handleChange }/>
<p>{formik.values.status} </p>

<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>


</div>
 


 )


}