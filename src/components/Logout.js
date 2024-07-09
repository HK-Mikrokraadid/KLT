import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Logout = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }    
    return (
        <Button size='sm' variant='primary' onClick={logOut} >Logout</Button>
    )         
}

export default Logout;