import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";


import './Header.css';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    tabs: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240,
      },
    center: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
      },
  }));
  
  


  export default function Header () {    

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const [open, setOpen] = useState([]);

    const [value, setValue] = useState([0]);

    const handleChange = (event, value) => {
      setValue(value);
    };

     const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
        
    const body = (
      
      <div style={modalStyle} className={classes.paper}>
        <BrowserRouter>
            <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth 
                >
                <Tab label="Login" selected component={Link} to="/login" />
                <Tab label="Register" component={Link} to="/register" />
                </Tabs>
            </AppBar>

            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
            </div>
      </BrowserRouter>
         
        </div>
      );

      function Login() {
        return (
             <ValidatorForm>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="password"
                        label="Password"
                        type="text"
                        name="password"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Button variant="contained" color="primary">Login</Button>
                </FormControl>    
            </ValidatorForm>
        );
      }
      
      function Register() {
        return (
            <ValidatorForm>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="firstName"
                        label="First Name"
                        type="text"
                        name="firstName"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="lastName"
                        label="Last Name"
                        type="text"
                        name="lastName"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="email"
                        label="Email"
                        type="text"
                        name="email"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="password"
                        label="Password"
                        type="text"
                        name="password"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <TextValidator
                        id="contactNo"
                        label="Contact No."
                        type="text"
                        name="contactNo"
                    >
                    </TextValidator>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Button variant="contained" color="primary">Register</Button>
                </FormControl>    
            </ValidatorForm>
        );
      }
    
    let button;
    const access_token = "guest";

    if(access_token=="guest"){
        button = <Button variant="contained"  onClick={handleOpen}>Login</Button>
    }else{  
        button = <Button variant="contained">Logout</Button>
    }   

    return(
        <div className="header">
        <img className="logo" src="logo.svg" alt="_logo" />
        <div className="login-logout">
            {button}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
    </div>
    )
}