import React from 'react';
import './App.css';
import AccountsContainer from './containers/AccountsContainer'
import {HomeComponent} from './components/HomeComponent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserAuthenticationContainer from './containers/UserAuthenticationContainer'
import {getProfileFetch} from './actions/getProfileFetch'
import {connect} from 'react-redux'


class App extends React.Component {

  componentDidMount = () => {
    this.props.getProfileFetch(current_user_id)
  }

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

const current_user_id= localStorage.user_id 

const mapDispatchToProps = dispatch => ({
  getProfileFetch: (current_user_id) => dispatch(getProfileFetch(current_user_id))
})

export default connect(null, mapDispatchToProps)(App); 

