import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import AccountsContainer from './containers/AccountsContainer'
import {HomeComponent} from './components/HomeComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {getProfileFetch} from './actions/getProfileFetch'
import {UserAuthentificationContainer} from './containers/UserAuthentificationContainer'

class App extends React.Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    console.log(1)
    return (
       <div className="App">
          <AccountsContainer />
          <UserAuthentificationContainer />
          <Route exact path="/" component={HomeComponent} />
       </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);
