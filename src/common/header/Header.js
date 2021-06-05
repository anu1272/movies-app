import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './Header.css';

class Header extends Component {
    render(){
        const access_token = "guest";
        const book_show = "isMovieSelectedNot";
        
        let button;
        let book_show_button;

        if(access_token=="guest"){
            button = <Button variant="contained" onClick={this.handleOpen}>Login</Button>
        }else{  
            button = <Button variant="contained">Logout</Button>
        }   

        if(book_show=="isMovieSelected"){
            book_show_button = <Button variant="contained" color="primary">Book Show</Button>
        } 

        return(
            <div className="header">
            <img className="logo" src="logo.svg" alt="_logo" />
            <div className="book-show">
                {book_show_button}
            </div>
            <div className="login-logout">
                {button}
            </div>
        </div>
        )
    }    
}

export default Header;
