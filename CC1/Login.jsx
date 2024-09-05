import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [error, setError] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'Rasika' && password === 'Rasika@123') {
            setError('');
            alert('Login successful!');
           window.location.href="/home";
        } else {
            setError('Invalid username or password');
        }
    };

    

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === 'username') {
            setUsername(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    };

    return (
        
        <div className="z-login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1><br></br><br></br>
                UserName:<input type="text" id="username" value={username} onChange={handleInputChange} placeholder="Username" required/><br></br>
                Password:<input type="password" id="password" value={password} onChange={handleInputChange} placeholder="Password" required/>
                <br></br><br></br>
                <button type="submit">Login</button>
                
                {error && <div className="z-error">{error}</div>}
                <div className="z-link-container">
                    <p>Don't have an account?
                    <Link to="/signup">&nbsp;Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
