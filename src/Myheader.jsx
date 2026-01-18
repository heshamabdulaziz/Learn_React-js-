export default function Myheader(){
/* JSX use to write js code in html and html elements in js

*/
let obj={
    name:"hesham",
    nationality:"yemen", 
    age:37,
   
}

return(
    <div>
       {
        // call function using JSX
       } 
        <h1> {jsx()}</h1>
<h1 style={{backgroundColor:"green",color:"red"}}>Name:{obj.name}</h1>
<h1 style={{backgroundColor:"green",color:"black"}}>Name:{obj.nationality}</h1>
<h1 style={{backgroundColor:"green",color:"white"}}>Name:{obj.age}</h1>

</div>
    )

    
}
 
function jsx(){

    return "hi hesham th laern JSX"
 }