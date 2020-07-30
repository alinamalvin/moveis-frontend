import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import {HomeComponent} from './components/HomeComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'

class App extends React.Component {

  render() {
    console.log(1)
    return (
       <div className="App">
          <AccountsContainer />
          <Signup />
          <Login />
          <Route exact path="/" component={HomeComponent} />
       </div>
    );
  }
}

export default connect()(App);
