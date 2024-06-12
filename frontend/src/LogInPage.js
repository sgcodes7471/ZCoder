import Navbar1 from "./Navbar1"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn(){
    const [username , setUsername]=useState('');
    const [password , setPassword]=useState('');
    const [errorCase , setErrorCase] = useState('error');
    const navigate = useNavigate()

    const handleLogin=async (credentials)=>{
      try{
        const response=await fetch('http://localhost:3000/LogIn',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },body:JSON.stringify(credentials)
        })
        if(response.status === 200){
            const {AccessToken , loggedInUser} =await response.json();
            localStorage.setItem('loggedInUser', loggedInUser )
            navigate(`/LogIn/${loggedInUser._id}`)
        }else{
          setErrorCase('Invalid Login Credentials')
        }
      }catch(error){
        console.log(error)
        setErrorCase("Error in Logging In User from our side. Please Try Later!! Sorry for Inconviniece")
      }
    }

    return(<>
    <div className='body-wrapper'>
    
    <Navbar1/>
  
    <div className='login-form-wrapper'>
  
    <form method='post' action='/LogIn' onSubmit={async (e)=>{
      e.preventDefault();
      handleLogin({username ,  password})
    }}>
      <h2>LogIn</h2>
      <input type='text' name='uniqueUser' placeholder='Enter your email' onChange={(e)=>setUsername(e.target.value)} required/>
      <input type='password' name='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} required/>
      <input className='login-submit' type='submit' value="LogIn"/>
    </form>
      <div className="error-wrapper">{errorCase}</div>
      <div className='login-extras-wrapper'>
      <p><Link to='/ForgotPassword'>Forgot Password?</Link></p>
      <p><Link to='/SignUp'>Don't have an Account?</Link></p>
      </div>
  
    </div>
  
    </div>

    </>
    )
}
export default LogIn