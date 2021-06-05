import React, {Component, Fragment} from 'react';
import Header from '../common/header/Header';
import Home from './home/Home';

class Controller extends Component {
render() {
  return (
    <Fragment>
      <Header/>
      <Home/>
    </Fragment>
    )
}
}
export default Controller;