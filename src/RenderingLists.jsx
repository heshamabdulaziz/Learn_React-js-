import "./RenderLists.css"
export default function RenderingLists(){

    const handleAdd=()=>{



    }
    const users=[
        {id:1,   userName:"john",age:27, country:"USA" },
        { id:2, userName:"hesham",age:37, country:"CANADA" },
        {id:3,  userName:"ali",age:22, country:"yemen" },
        {id:4, userName:"Reco",age:29, country:"England" }
    ]

 return(
    <div>
        <form>
UseName:<input type="text"></input><br/>

        </form>
  
<table style={{}}>
    <thead> <h3 style={{backgroundColor:"red",color:"white"}}>Rendering Lists using map  </h3></thead>
    <tr>
<th>UserName </th>
  <th>Age </th> 
   <th>Country </th>               

    </tr>

{
users.map((user)=><tr key={user.id}>
 <td> {user.userName }  </td> 
 <td>{user.age }   </td> 
 <td> {user.country } </td>   
  <td> <button className="btn" style={{backgroundColor:"green" ,color:"white"}} onClick={handleAdd}>Add</button> </td> 
   <td> <button className="btn" style={{backgroundColor:"blue" ,color:"white"}}>Update</button> </td> 
 <td> <button  className="btn" style={{backgroundColor:"red" ,color:"white"}}>Delete</button> </td>                 
 
  </tr>

)


}

</table>


</div>

    )



}