import axios from "axios"
import { useEffect, useState } from "react";


const  UseEffectWith_Fetch_Data=()=>{
 const[posts,setPosts]=useState([]);
const[loading,setloading]=useState(true)
const[error,setError]=useState(false)
 /*const fetchPosts=async()=>{
const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
return setPosts(res.data);
 
 }  */

 useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        setPosts(res.data)
        setloading(false)
    }).catch((err)=>{
        setError(true)
        setloading(false)
        console.log(err.error);
        
    })

 },[])

return(
   <div>
    <h2>Fetch data </h2>
    { error&&(<h1>something went wrong</h1>)}


{

loading?<h1>Loading</h1>:
posts.map((post)=> <div key={post.id}> {post.id} {post.title} </div>)
 
}


   </div>

    )
}

export default  UseEffectWith_Fetch_Data