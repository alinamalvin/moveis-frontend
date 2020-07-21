import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import {HomeComponent} from './components/HomeComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends React.Component {

  render() {
    console.log(1)
    return (
       <div className="App">
          <AccountsContainer />
          <Route exact path="/" component={HomeComponent} />
       </div>
    );
  }
}

export default connect()(App);
