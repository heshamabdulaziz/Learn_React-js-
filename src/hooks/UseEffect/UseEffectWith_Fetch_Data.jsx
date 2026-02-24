import axios from "axios"
import { useEffect, useState } from "react";


const  UseEffectWith_Fetch_Data=()=>{
 const[posts,setPosts]=useState([]);
 const[postId,setPostId]=useState(1);
 const[post,setPost]=useState({});
const[loading,setloading]=useState(true)
const[error,setError]=useState(false)

 /*const fetchPosts=async()=>{
const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
return setPosts(res.data);
 
 }  */

 useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        setPosts(res.data)
        setloading(false)
    }).catch((err)=>{
        setError(true)
        setloading(false)
        console.log(err.error);
        
    })

 },[])

 //fetch one post 
 
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res)=>{
        setPost(res.data)
        setloading(false)
    }).catch((err)=>{
        setError(true)
        setloading(false)
        console.log(err.error);
        
    })

 },[postId])
 
return(
   <div>
    <label>Enter on post Number</label>
    <input type="number" value={postId} placeholder="Enter postNumber " onChange={(e)=>setPostId(e.target.value)}/>
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