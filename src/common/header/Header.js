import React from 'react';
import { Button } from '@material-ui/core';
import './Header.css';

const Header = function (props) {    
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
        <div className="login-logout">
            {button}
        </div>
    </div>
    )
}

export default Header;