export default function PersonCard({name,age,country}){
//let {name,age,country}=props;
//console.log(props);

    return(
  <div style={{backgroundColor:"red",color:"whitesmoke"}}> 
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{country}</h2>

    </div>




    )
}