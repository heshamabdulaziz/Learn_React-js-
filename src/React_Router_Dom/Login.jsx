import React from 'react'

export default function Login() {
  return (
    <div>
      <h2>Login page</h2>
     <label>Email</label> <input type='email' placeholder='Enter your Email'/>
     <br/>
     <label>Password</label> <input type='password' placeholder='Enter your Password'/>  
      <br/> 
     <button style={{backgroundColor:'blue',}} type='submit'>Login</button>
     
       </div>
  )
}
