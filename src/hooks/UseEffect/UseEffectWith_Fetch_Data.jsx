
import {useState } from "react";
import { useApi } from "../Customhook/UseApi";
import { useFetchone } from "../Customhook/fectchOne";


const  UseEffectWith_Fetch_Data=()=>{
 const[posts,loading,error]=useApi('https://jsonplaceholder.typicode.com/posts');
 const[postId,setPostId]=useState(1);
  const[post]=useFetchone("https://jsonplaceholder.typicode.com/posts",postId);

const fetchOneHandler=(e)=>{
            setPostId(e.target.value)  
        }



return(
   <div>
    <label>Enter on post Number</label>
    <input type="number" value={postId} placeholder="Enter postNumber " onChange={fetchOneHandler}/>
  <h2>Fetch one post </h2>
  {

    <pr>{post.id} - {post.title}</pr>
  }

    <h2>Fetch ALL posts </h2>
    { error&&(<h1>something went wrong</h1>)}


{

loading?<h1>Loading</h1>:
posts.map((post)=> <div key={post.id}> {post.id} {post.title} </div>)
 
}


   </div>

    )
}

export default  UseEffectWith_Fetch_Data