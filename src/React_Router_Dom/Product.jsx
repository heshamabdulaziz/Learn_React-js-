import { NavLink, Outlet } from "react-router-dom"



const Product=()=>{
const role="user";
return(
    <div>

       
<h2> Nested routes </h2>
<nav>
  {
    role==="Admin"?<div><NavLink to="AddProduct">Add</NavLink>|
  <NavLink to="UpdateProduct">Update</NavLink>|
  <NavLink to="DeleteeProduct">delete</NavLink>|</div>:<h>ALL products</h>
  }


</nav>
 <Outlet/>  
 

</div>
)

}
export default Product 