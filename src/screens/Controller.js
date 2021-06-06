import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './details/Details';
import Home from './home/Home';
import BookShow from '../screens/bookshow/BookShow';
import Confirmation from '../screens/confirmation/Confirmation';

export default function Controller() {

  const baseUrl = "localhost:8085/api/v1/";

  return (
    <Fragment>
      <Router>
        <div>
          <Route 
            exact path="/" 
            component={ Home } />
          <Route 
            exact path="/details" 
            component={ Details } 
          />
          <Route 
            path="/bookshow" 
            render={(props) => <BookShow {...props} baseUrl={baseUrl} />}
          />
          <Route 
            path="/confirm" 
            render={(props) => <Confirmation {...props} baseUrl={baseUrl} />}
          />
        </div>
      </Router>      
    </Fragment>
    )
}