export default function PersonCard(props){
//let {name,age,country}=props;
    return(
  <div style={{backgroundColor:"red",color:"whitesmoke"}}> 
    <h2>{props.name}</h2>
    <h2>{props.age}</h2>
    <h2>{props.country}</h2>

    </div>




    )
}