import axios from "axios"
import { useEffect, useState } from "react";


const  UseEffectWith_Fetch_Data=()=>{
 const[posts,setPosts]=useState([]);

 /*const fetchPosts=async()=>{
const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
return setPosts(res.data);
 
 }  */

 useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        setPosts(res.data)
    }).catch((err)=>{
        console.log(err.error);
        
    })

 },[])

return(
   <div>
    <h2>Fetch data </h2>
{

posts.map((post)=> <div key={post.id}> {post.id} {post.title} </div>)

}


   </div>

    )
}

export default  UseEffectWith_Fetch_Data