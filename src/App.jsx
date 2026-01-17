import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myheader from './Myheader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Myheader/>
    <Mycomponent/>
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

export default App
