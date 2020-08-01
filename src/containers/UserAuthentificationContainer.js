import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'

export const UserAuthentificationContainer = () => {
    return (
        <div>
            <button>
                <Link to='/login'>Login</Link> 
            </button>    
            <button>
            <Link to='/signup'>Signup</Link>
            </button>
           <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
            </Switch>
        </div>
    )
}
