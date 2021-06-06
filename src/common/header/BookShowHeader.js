import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header  () {    
    const access_token = "guest";
        
    let button;

    if(access_token=="guest"){
        button = <Button variant="contained">Login</Button>
    }else{  
        button = <Button variant="contained">Logout</Button>
    }   

    return(
        <div className="header">
        <img className="logo" src="logo.svg" alt="_logo" />
        <div className="book-show">
             <Link to="/bookshow"><Button variant="contained" color="primary">Book Show</Button></Link>
        </div>
        <div className="login-logout">
            {button}
        </div>
    </div>
    )
}