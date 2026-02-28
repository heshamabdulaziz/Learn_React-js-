import { NavLink, Outlet } from "react-router-dom"



const Product=()=>{

return(
    <div>

       
<h2> Nested routes </h2>
<nav>
<NavLink to="AddProduct">Add</NavLink>|
  <NavLink to="UpdateProduct">Update</NavLink>|
  <NavLink to="DeleteeProduct">delete</NavLink>|

</nav>
 <Outlet/>  
 

</div>
)

}
export default Product 