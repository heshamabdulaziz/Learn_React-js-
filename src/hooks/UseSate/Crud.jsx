import { useState } from "react"

export default function Crud(){
    const [inputval,setinputval]=useState("");
    const [items,setItems]=useState([
     {id:1,name:"item1"},  
    {id:2,name:"item2"},
    {id:3,name:"item3"}, 
    {id:4,name:"item4"}, 
    {id:5,name:"item5"},  
    ]);
    
    const itemList=items.map((item)=>{
    return(<li key={item.id}> {item.id} {item.name}
     <button style={{backgroundColor:"red",color:"white"}} onClick={()=>{handleDel(item.id)}} >delete</button>
      <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>{handleUpdate(item.id)}} >update</button>
     </li> )}

     
    )

//Add operation 
   const handleAdd=()=>{

    setItems([...items,{id:items.length+1,name:inputval}]);
    setinputval("");
    

   }
   //Add  delete
 const handleDel=(id)=>{
const newitems=items.filter((item)=>{
    if(item.id!==id) return item
    else return null ;


 });
setItems(newitems);
   
 }
 //update operation 
  const handleUpdate=(id)=>{
    let newitems=items.map((item)=>{
    if(item.id==id)return {...item,name:"hesham"}
      else return item

  })
setItems(newitems);
//setItems(newitems);
 
 }
return(
    <div>
    <h1>Crud using useState hook</h1>
    <input type="text" onChange={(e)=>{
        setinputval(e.target.value);}} /> {inputval}
    <br></br>
  <h3>{itemList}</h3>  

    <button style={{backgroundColor:"green",color:"white"}} onClick={handleAdd}>Add</button>
    </div>





)}