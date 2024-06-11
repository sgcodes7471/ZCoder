import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "./Navbar1";

const ForgotPassword = () => {
    const [username, setUsername] = useState('');

    const callOTP = () => {
        // Implementation of calling OTP
    }

    return (
        <>
            <div className="body-wrapper">
                <Navbar1 />
                <div className="login-form-wrapper"> 
                    <form action="/ForgotPassword" method="post" onSubmit={async (e) => {
                        e.preventDefault();
                        callOTP();
                    }}>
                        <h2>Forgot Password</h2>
                        <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
                        <input type="submit" value='Get OTP' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;
