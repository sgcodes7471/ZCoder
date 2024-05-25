import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "./Navbar1";

function SignUp(){

    const [username , setUsername]=useState("");
  const [fullname , setFullname]=useState("");
  const [email , setEmail]=useState("");
  const [password , setPassword]=useState("");
  const [confirmPassword , setConfirmPassword]=useState("");

    return(<>
     <div className='body-wrapper'>
      <Navbar1/>
      <div className='signup-form-wrapper'>
  
    <form action='/SignUp' method='post' onSubmit={(e)=>{
      e.preventDefault();
      
    }}>
      <h2>SignUp</h2>
      <input type='text' name='fullname' placeholder='Enter your Full Name' onChange={(e)=>setFullname(e.target.value)} required/>
      <input type='text' name='userId' placeholder='Enter a UserId' onChange={(e)=>setUsername(e.target.value)} required/>
      <input type='text' name='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} required/>
      <input type='password' name='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}  required/>
      <input type='password' name='conf_password' placeholder='Confirm your password' onChange={(e)=>setConfirmPassword(e.target.value)} required/>
      <input className='login-submit' type='submit' value="SignUP" />
    </form>
  
    </div>
    <div className='login-extras-wrapper'>
      <p><Link to='/LogIn'>Already have an Account?</Link></p>
      </div>
    </div>
    </>
    )
}
export default SignUp