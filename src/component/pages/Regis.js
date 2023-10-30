import React from 'react'
import "./Regis.css"
import { Link } from 'react-router-dom'


const Regis = () => {
    
  return (
    <div className='regis'>
        <h1>Register</h1>
<input type='text' placeholder='Enter your name' /><br />
<input type="text " placeholder='Enter your Email' /><br />
<input type='text' placeholder='Password' /><br />
<input type='text' placeholder='Re enter Your password' /><br />
<Link to="/Login"><button>Submit</button></Link>
{/* <button onClick={()=>{
    navigate("Login");
}}>Submit</button> */}






    </div>
  )
}

export default Regis