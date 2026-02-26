import { useEffect, useState } from "react";
import axios from "axios";

 
 
 export const useApi=(url)=>{

const[posts,setPosts]=useState([]);
const[loading,setloading]=useState(true)
const[error,setError]=useState(false)


 useEffect(()=>{
    axios.get(url).then((res)=>{
        setPosts(res.data)
        setloading(false)
    }).catch((err)=>{
        setError(true)
        setloading(false)
        console.log(err.error);
        
    })

 },[])
 
return[posts,loading,error];


 }