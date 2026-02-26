import {useEffect, useState } from "react";
import axios from "axios";

 export const useFetchone=(url,id)=>{
 const[post,setPost]=useState({});
const[loading,setloading]=useState(true);
const[error,setError]=useState(false);


 //fetch one post 
 
  useEffect(()=>{
    axios.get(`${url}/${id}`).then((res)=>{
        setPost(res.data)
        setloading(false)
    }).catch((err)=>{
        setError(true)
        setloading(false)
        console.log(err.error);
        
    })

 },[id]) 
 
return [post,loading,error];


 } 