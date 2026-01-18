export default function PersonCard({name,age,country,bgcolor,children}){
//let {name,age,country}=props;
//console.log(props);

    return(
  <div style={{backgroundColor:bgcolor,color:"whitesmoke"}}> 
  {children}
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{country}</h2>

    </div>




    )
}