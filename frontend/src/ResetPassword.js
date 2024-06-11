import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "./Navbar1";

const ResetPassword = () => {
    const [username, setUsername] = useState('');
    const [otp, setOtp] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pass !== confirmPass) {
            setError('Passwords do not match');
        } else {
            setError('');
            // Proceed with form submission
        }
    }

    return (
        <>
            <div className="body-wrapper">
                <Navbar1 />
                <div className="login-form-wrapper">
                    <form action="/ForgotPassword" method="post" onSubmit={handleSubmit}>
                        <h2>Reset Password</h2>
                        <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
                        <input type="password" placeholder="Enter OTP" onChange={e => setOtp(e.target.value)} />
                        <input type="password" placeholder="Enter your new password" onChange={e => setPass(e.target.value)} />
                        <input type="password" placeholder="Confirm password" onChange={e => setConfirmPass(e.target.value)} />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <input type="submit" value='Reset Password' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;
