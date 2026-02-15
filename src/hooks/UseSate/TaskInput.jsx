export default function TaskInput({handleSubmit,setText2}){
    return(
 <div>
    <h1>Pass function from child to parant component</h1>
<input type="text" onChange={(e)=>{
    
    setText2(e.target.value)
    
    handleSubmit(e.target.value);

}

}/>


</div>   
   )}