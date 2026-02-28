import { useNavigate } from "react-router-dom"

//[routes,link,navlink,useNavigate,no mach,nested routes]
const Home=()=>{
 const navige=useNavigate();
return(
    <div>
<h2>  welecme to Home  page</h2>
  click here to contact us<button onClick={()=>navige("/login")}>login</button>

</div>
)

}
export default Home