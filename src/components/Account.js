import React from 'react'
import {Redirect} from 'react-router-dom'
import MoviesContainer from '../containers/MoviesContainer'

const Account  = (props) => {
    console.log(props)

    let account = props.accounts[props.match.params.id - 1]

    return (
        <div>
        <h2>
           {account ? account.name : null}
        </h2>
        <MoviesContainer account={account}/>
        </div>
    )
}

export default Account;