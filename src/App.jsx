import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myheader from './Myheader'
import PersonCard from './PersonCard'
import RenderingLists from './RenderingLists'
import Button from './hooks/UseSate/Button'
import Form from './hooks/Form'
import Crud from './hooks/UseSate/Crud'
import Counter from './hooks/UseSate/Counter'
import TaskInput from './hooks/UseSate/TaskInput'
import UseRefExmple from './hooks/Useref/UseRefExmple'
import UseEffectExample from './hooks/UseEffect/UseEffectExample'
import UseMemoExample from './hooks/Usememo/UseMemoExample'
import ContextApiExample from './hooks/ContextApi/ContextApiExample'

 const  show=true;
function App() {
  const [count, setCount] = useState(0);
  const [inputText,setinputText] = useState(" ");
  const [inputText2,setinputText2] = useState(" ");

 function handleInputCHang(val){

setinputText(val);
 }

  return (
    <>
    <ContextApiExample/>
    <UseMemoExample/>
    <hr></hr>
    <UseEffectExample/>
    <hr></hr>
    <UseRefExmple/>
    <hr/>
    <TaskInput handleSubmit={handleInputCHang}  setText2={setinputText2}/>
    <h2> pass function  :{inputText}</h2>
    <h2>  pass Text2 :{inputText2}</h2>
    <hr/>
    <Counter/>
   <hr></hr>
<Crud/>
<hr></hr>
    <Form/>
    <hr/>
  <Button/>
    <Mycomponent/>
   
      <Myheader/>
      <RenderingLists/>

      {// condtional rendering we can use(&&, condtion?___ : ___ ,)
      
      } 
    
  { show?(
    <PersonCard name="hesham" age="37" country="YEMEN " bgcolor="Red">
     <h2 style={{backgroundColor:"black", color:"white"}}>first way conditional rendering using ?__:___  santax</h2> 
       </PersonCard> ):<h1>NO data</h1>}
   
    { 
    
    show&&<Renderuser/>
    
    }
       

       <hr></hr>
      <PersonCard name="john " age="27" country="USA" bgcolor="green">
      <h1 style={{backgroundColor:"black", color:"white"}}>USA</h1>   </PersonCard>
    
      <hr/>
      <PersonCard name="dive" age={28} country="CANADA" bgcolor="yellow">
    <h1 style={{backgroundColor:"black", color:"white"}}>CANADA</h1> 
        </PersonCard>
      <hr/>
      <PersonCard name="reco" age="23" country="canada" bgcolor="brown"/>
      <hr/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>welecome hesham to learn react js</h3>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button> 
         
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
function Mycomponent(){

  return(
<>
<h1>Create </h1>
<h2> first react Component</h2>
</>
  )
}

//condtional rendering 

function Renderuser(){
  //second way to make conditional rendering
  return(
    <PersonCard name="hesham" age="37" country="YEMEN " bgcolor="Red">
     <h3 style={{backgroundColor:"black", color:"white"}}> second way conditional rendering using  && santax</h3> 
       </PersonCard> )
     


}

export default App
