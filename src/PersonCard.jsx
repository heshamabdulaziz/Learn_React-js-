export default function PersonCard(props){
let {name,age,country}=props;
    return(
  <div style={{backgroundColor:"red",color:"whitesmoke"}}> 
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{country}</h2>

    </div>




    )
}