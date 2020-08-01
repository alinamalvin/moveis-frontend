import React from 'react';
import './App.css';
import AccountsContainer from './containers/AccountsContainer'
import {HomeComponent} from './components/HomeComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserAuthenticationContainer from './containers/UserAuthenticationContainer'


class App extends React.Component {

  render() {
    console.log(1)
    return (
       <div className="App">
          <AccountsContainer />
          <UserAuthenticationContainer />
          <Route exact path="/" component={HomeComponent} />
       </div>
    );
  }
}

export default App;
