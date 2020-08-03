import React from 'react'
import {Route, Switch, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Signup from '../components/Signup'
import Login from '../components/Login'
import {logoutUser} from '../actions/logoutUser'


export class UserAuthenticationContainer extends React.Component {

    handleClick = event => {
        event.preventDefault()
        // Remove the token from localStorage
        // localStorage.removeItem('token','name')
        localStorage.clear()
        // Remove the user object from the Redux store
        this.props.logoutUser()
        this.props.history.push('/');
      }

    render(){
    return (
        <div>
            <button>
                <Link to='/login'>Login</Link> 
            </button>    
            <button>
                <Link to='/signup'>Signup</Link>
            </button>
            <div>
                {localStorage.token ? <button onClick={this.handleClick}>Log Out</button>: null}
            </div>
           <Switch>
                <Route path='/login' render={(routerProps) => <Login {...routerProps} currentUser={this.props.currentUser}/>} />
                <Route path='/signup' component={Signup}/>
            </Switch>
        </div>
        )
    }
}

  
  const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
  })

export default withRouter(connect(null, mapDispatchToProps)(UserAuthenticationContainer)); 

