import { useFormik } from "formik";

export default function Form(){
    
    /* 
    referncs 
     1- https://youtu.be/zxZ5lT9lf2o?si=2DgHMDThnzTgO4qm   - youtube
     2-https://formik.org/docs/api/formik                  -doc
    
    
    */
   const formik = useFormik({
     initialValues: {
            name:'',
            email:'',
            text:'',
            isStudent:false,
            country:'',
            status:''
     },
      validate:(values)=> {
        const errors={};
       if(!values.name){errors.name="Field is   required";
    }
       if(!values.email){errors.email="Field is   required";}
       if(!values.text){errors.text="Field is  required";}
       if(!values.isStudent){errors.isStudent="Field is   required";}
       if(!values.status){errors.status="Field is  required";}
       if(!values.country){errors.country="Field is  required";}
       return errors;
       }, 
      onSubmit: (values) => {
       alert(JSON.stringify(values, null,2));
       },
    

    
   });
   
     
 return(
<div>
<h2 style={{color:"red"}}>UseStateWheForms</h2>
<form onSubmit={formik.handleSubmit}>
<label> Name: </label> 

<input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
{
formik.errors.name && <p style={{color:"red"}}><b>{formik.errors.name}</b></p> 
}


<label htmlFor=""> Email: </label>
<input type="Email" name="email" value={formik.values.email} onChange={formik.handleChange}
onBlur={formik.handleBlur} ></input>
{
formik.errors.email?<b><p style={{color:"red"}}> {formik.errors.email}</p> </b>:<br/>
}
<label htmlFor=""> Info: </label>
<textarea value={formik.values.text} name="text" onChange={formik.handleChange} onBlur={formik.handleBlur}> </textarea>
{
formik.errors.text && <p style={{color:"red"}}><b>{formik.errors.text}</b></p> 
}

<label htmlFor=""> Are you student : </label>
<input type="checkbox" name="isStudent" checked={formik.isStudent}  onChange={formik.handleChange} onBlur={formik.handleBlur}/>

{
formik.errors.isStudent && <p style={{color:"red"}}><b>{formik.errors.isStudent}</b></p> 
}

<label htmlFor=""> Your Country: </label> 
<select value={formik.values.country} name="country" onChange={formik.handleChange}>
<option >Canada </option>
<option>china </option>
<option>England </option>
<option>yemen</option>
  
</select>
{
formik.errors.country && <p style={{color:"red"}}><b>{formik.errors.country}</b></p> 
}

<label htmlFor=""> Gender: </label>  
Male:
<input type="radio" value="male" name="status" checked={formik.values.status=="male"}
 onChange={formik.handleChange } onBlur={formik.handleBlur}/>
Famiale <input type="radio" name="status"  value="femaile" checked={formik.values.status=="femaile"} 
onChange={formik.handleChange } onBlur={formik.handleBlur}/>
{
formik.errors.status && <p style={{color:"red"}}><b>{formik.errors.status}</b></p> 
}


<br/><br/>
<button style={{backgroundColor:"blue",color:"white"}}  type="submit">Send</button>

</form>


</div>
 


 )  }