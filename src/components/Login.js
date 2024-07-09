import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login () {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    function handleLoginFormCHange (event) {
        setLoginData({
        ...loginData,
        [event.target.name]: event.target.value,
    }); 
    }
    
    const handleLogin = async () => {
        try {
          const response = await axios.post('https://blog.hk.tlu.ee/login', loginData);
          localStorage.setItem('token', response.data.token);     
          navigate('/home');  
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
    }

    return (
        <div className='text-center mt-5 mb-5 border'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='m-2' > 
                <input type='email' name='email' onChange={handleLoginFormCHange} value={loginData.email} placeholder='Email address' ></input>
                <br/>
                <input type='password' name='password' onChange={handleLoginFormCHange} value={loginData.password} placeholder='Password' ></input>
                <br/>
                <button type='submit' className='m-2'>Login now!</button>
            </form>
        </div>
    )
};

export default Login;